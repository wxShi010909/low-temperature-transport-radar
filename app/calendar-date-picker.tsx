"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CalendarDatePickerProps = {
  value: string;
  availableDates: string[];
  onChange?: (date: string) => void;
  label?: string;
  compact?: boolean;
  className?: string;
};

type PopoverPosition = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  placement: "above" | "below";
};

const WEEKDAYS = ["一", "二", "三", "四", "五", "六", "日"];

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthValue(date: Date) {
  return date.getFullYear() * 12 + date.getMonth();
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function CalendarDatePicker({
  value,
  availableDates,
  onChange,
  label = "选择日期",
  compact = false,
  className = "",
}: CalendarDatePickerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const normalizedDates = useMemo(
    () => Array.from(new Set(availableDates.filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date)))).sort(),
    [availableDates],
  );
  const availableSet = useMemo(() => new Set(normalizedDates), [normalizedDates]);
  const earliest = normalizedDates[0] ?? value;
  const latest = normalizedDates.at(-1) ?? value;
  const selectedDate = availableSet.has(value) ? value : latest;
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => parseDate(selectedDate));
  const [popoverPosition, setPopoverPosition] = useState<PopoverPosition>({
    top: 80,
    left: 12,
    width: 304,
    maxHeight: 520,
    placement: "below",
  });

  const updatePopoverPosition = useCallback(() => {
    const trigger = rootRef.current;
    if (!trigger || typeof window === "undefined") return;

    const margin = 12;
    const gap = 8;
    const triggerRect = trigger.getBoundingClientRect();
    const width = Math.max(180, Math.min(304, window.innerWidth - margin * 2));
    const maxHeight = Math.max(240, window.innerHeight - margin * 2);
    const measuredHeight = Math.min(popoverRef.current?.offsetHeight ?? 354, maxHeight);
    const spaceBelow = window.innerHeight - triggerRect.bottom - gap - margin;
    const spaceAbove = triggerRect.top - gap - margin;
    const placement = spaceBelow < Math.min(measuredHeight, 300) && spaceAbove > spaceBelow ? "above" : "below";
    const preferredTop = placement === "above"
      ? triggerRect.top - gap - measuredHeight
      : triggerRect.bottom + gap;
    const top = Math.min(Math.max(margin, preferredTop), Math.max(margin, window.innerHeight - margin - measuredHeight));
    const left = Math.min(
      Math.max(margin, triggerRect.right - width),
      Math.max(margin, window.innerWidth - margin - width),
    );

    setPopoverPosition({ top, left, width, maxHeight, placement });
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !popoverRef.current?.contains(target)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    updatePopoverPosition();
    const frame = window.requestAnimationFrame(updatePopoverPosition);
    window.addEventListener("resize", updatePopoverPosition);
    window.addEventListener("scroll", updatePopoverPosition, true);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePopoverPosition);
      window.removeEventListener("scroll", updatePopoverPosition, true);
    };
  }, [open, updatePopoverPosition, visibleMonth]);

  function selectDate(date: string) {
    if (!availableSet.has(date)) return;
    setOpen(false);
    if (onChange) {
      onChange(date);
      return;
    }
    window.location.assign(`/?date=${encodeURIComponent(date)}`);
  }

  const monthStart = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const firstCellOffset = (monthStart.getDay() + 6) % 7;
  const cells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), index - firstCellOffset + 1);
    return { date, value: dateValue(date), currentMonth: date.getMonth() === visibleMonth.getMonth() };
  });
  const atFirstMonth = monthValue(visibleMonth) <= monthValue(parseDate(earliest));
  const atLastMonth = monthValue(visibleMonth) >= monthValue(parseDate(latest));
  const selectedLabel = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(parseDate(selectedDate));
  const monthLabel = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long" }).format(visibleMonth);
  const popover = open && typeof document !== "undefined" ? createPortal(
    <div
      ref={popoverRef}
      className={`calendar-popover calendar-popover-portal opens-${popoverPosition.placement}`}
      role="dialog"
      aria-label={`${label}日历`}
      style={{
        top: popoverPosition.top,
        left: popoverPosition.left,
        width: popoverPosition.width,
        maxHeight: popoverPosition.maxHeight,
      }}
    >
      <div className="calendar-month-header">
        <button type="button" onClick={() => setVisibleMonth((month) => addMonths(month, -1))} disabled={atFirstMonth} aria-label="上一个月">‹</button>
        <b>{monthLabel}</b>
        <button type="button" onClick={() => setVisibleMonth((month) => addMonths(month, 1))} disabled={atLastMonth} aria-label="下一个月">›</button>
      </div>
      <div className="calendar-weekdays" aria-hidden="true">{WEEKDAYS.map((day) => <span key={day}>{day}</span>)}</div>
      <div className="calendar-days">
        {cells.map((cell) => {
          const available = availableSet.has(cell.value);
          return (
            <button
              type="button"
              key={cell.value}
              className={`${cell.currentMonth ? "" : "outside-month"} ${available ? "has-archive" : ""} ${cell.value === selectedDate ? "selected" : ""}`.trim()}
              disabled={!available}
              onClick={() => selectDate(cell.value)}
              aria-label={`${cell.value}${available ? "，有归档" : "，无归档"}`}
            >
              {cell.date.getDate()}
            </button>
          );
        })}
      </div>
      <div className="calendar-footer">
        <span>蓝点为已有归档</span>
        <b>共 {normalizedDates.length} 个日期 · 后续自动延伸</b>
      </div>
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <div ref={rootRef} className={`calendar-date-control ${compact ? "is-compact" : ""} ${open ? "is-open" : ""} ${className}`.trim()}>
        <button
          className="calendar-trigger"
          type="button"
          onClick={() => {
            if (!open) {
              setVisibleMonth(parseDate(selectedDate));
              updatePopoverPosition();
            }
            setOpen((current) => !current);
          }}
          aria-label={`${label}，当前为${selectedLabel}`}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span className="calendar-trigger-label">{label}</span>
          <b>{selectedLabel}</b>
          <span className="calendar-trigger-icon" aria-hidden="true">▦</span>
        </button>
      </div>
      {popover}
    </>
  );
}
