/**
 * Format a date string for display in the health table
 * @param dateString - Date string in Indian format DD/MM/YYYY (e.g., "10/12/2025" = 10 Dec)
 * @returns Formatted date like "10 Dec"
 */
export function formatTableDate(dateString: string): string {
  if (!dateString) return "-";

  try {
    // Parse DD/MM/YYYY format (Indian format)
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1; // JS months are 0-indexed
      const year = Number.parseInt(parts[2], 10);

      const date = new Date(year, month, day);

      if (Number.isNaN(date.getTime())) {
        return dateString;
      }

      return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
      }).format(date);
    }

    return dateString;
  } catch {
    return dateString;
  }
}

/**
 * Format a date for the "last updated" footer
 * @param date - JavaScript Date object
 * @returns Formatted date like "December 12, 2025 at 3:45 PM"
 */
export function formatLastUpdated(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}
