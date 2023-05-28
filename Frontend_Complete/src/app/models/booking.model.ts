export class Booking {
    public id: number;
    public employeeId: string;
    public employeeName: string;
    public department: string;
    public seats: number;
    public floor: string;
    public roomNumber: string;
    public dateTime: Date;
    public startTime: string;
    public endTime: string;
    
    constructor() {
        this.id = 0;
        this.employeeId = '';
        this.employeeName = '';
        this.department = '';
        this.seats = 0;
        this.floor = '';
        this.roomNumber = '';
        this.dateTime = new Date();
        this.startTime = '';
        this.endTime = '';
      }
}