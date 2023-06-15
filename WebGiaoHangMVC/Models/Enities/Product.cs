namespace WebGiaoHangMVC.Models.Enities
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Address { get; set; }
        public string Area { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Transfer { get; set; }
        public bool Payment { get; set; }
        public string Note { get; set; }
        public int Total { get; set; }
    }
}
