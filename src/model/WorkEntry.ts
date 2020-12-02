export default class WorkEntry {
  id: number;
  name: string;
  date: Date;
  task: string;
  work: number;
  status: number;
  comment: string;

  constructor(
    id: number,
    name: string,
    date: Date,
    task: string,
    work: number,
    status: number,
    comment: string
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.task = task;
    this.work = work;
    this.status = status;
    this.comment = comment;
  }
}
