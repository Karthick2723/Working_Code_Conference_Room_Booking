using LoginSampleBackEnd.Entity;

namespace LoginSampleBackEnd.UtilityService
{
    public interface IEmailService
    {
        void SendEmail(EmailModel emailModel);
    }
}
