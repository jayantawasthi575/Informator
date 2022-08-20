using InformerReport.Model;
using InformerReport.ViewModel;
using System.Collections.Generic;

namespace InformerReport.Repository
{
    public interface IReportInfo
    {
        public bool AddReport(ReportModel ReportM,int id);
        public IEnumerable<Report> GetReport(int Id);
        public IEnumerable<Report> GetReportByReporterId(int Id1, int Id2);
        public bool UpdateReport(int id, ReportModel rep);
        public void DeleteReportById(int id);
        public IEnumerable<AllReportModel> GetAllReportsForHome();
    }
}
