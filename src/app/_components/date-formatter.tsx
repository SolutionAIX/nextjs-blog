import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export default function DateFormatter({ dateString }: { dateString?: string | null }) {
  if (!dateString) return <span>Invalid Date</span>; // Handle null/undefined

  try {
    return <time dateTime={dateString}>{format(parseISO(dateString), "LLLL d, yyyy")}</time>;
  } catch (error) {
    console.error("Invalid date format:", dateString, error);
    return <span>Invalid Date</span>;
  }
}
