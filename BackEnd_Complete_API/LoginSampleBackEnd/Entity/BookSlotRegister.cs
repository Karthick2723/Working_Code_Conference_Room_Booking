namespace LoginSampleBackEnd.Entity
{
    public class BookSlotRegister
    {
        public Guid id { get; set; }
        public string employeeId { get; set; }
        public string employeeName { get; set; }
        public string department { get; set; }
        public int seats { get; set; }
        public string floor { get; set; }
        public string roomNumber { get; set; }
        public DateTime dateTime { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
    }
}
