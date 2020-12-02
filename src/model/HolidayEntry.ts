export default class HolidayEntry {
  id: number;
  name: string;
  start: Date;
  end: Date;
  days: number;
  status: number;
  comment: string;

  constructor(
    id: number,
    name: string,
    start: Date,
    end: Date,
    days: number,
    status: number,
    comment: string
  ) {
    this.id = id;
    this.name = name;
    this.start = start;
    this.end = end;
    this.days = days;
    this.status = status;
    this.comment = comment;
  }
}
