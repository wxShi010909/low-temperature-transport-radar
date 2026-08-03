"use client";

import { useId } from "react";

type CalendarDatePickerProps = {
  value: string;
  availableDates: string[];
  onChange?: (date: string) => void;
  label?: string;
  compact?: boolean;
  className?: string;
};

export function CalendarDatePicker({
  value,
  availableDates,
  onChange,
  label = "选择日期",
  compact = false,
  className = "",
}: CalendarDatePickerProps) {
  const listId = useId().replace(/:/g, "-");
  const sortedDates = [...availableDates].sort((a, b) => a.localeCompare(b));
  const min = sortedDates[0] ?? value;
  const max = sortedDates.at(-1) ?? value;

  function openCalendar(input: HTMLInputElement) {
    if (typeof input.showPicker === "function") {
      try { input.showPicker(); } catch { /* Browser still opens its native picker. */ }
    }
  }

  function selectDate(date: string) {
    if (!date) return;
    if (onChange) {
      onChange(date);
      return;
    }
    window.location.href = `/?date=${encodeURIComponent(date)}`;
  }

  return (
    <label className={`calendar-date-control ${compact ? "is-compact" : ""} ${className}`.trim()}>
      <span>{label}</span>
      <input
        type="date"
        value={value}
        min={min}
        max={max}
        list={listId}
        onClick={(event) => openCalendar(event.currentTarget)}
        onChange={(event) => selectDate(event.currentTarget.value)}
        aria-label={label}
      />
      <datalist id={listId}>{sortedDates.map((date) => <option value={date} key={date} />)}</datalist>
    </label>
  );
}
