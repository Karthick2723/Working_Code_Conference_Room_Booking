/*using LoginSampleBackEnd.Context;
using LoginSampleBackEnd.Entity;
using LoginSampleBackEnd.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace LoginSampleBackEnd.Services.Service
{
    public class BookSevice: IBookService
    {
        private readonly AppDbContext _dbContext;

        public BookSevice(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<BookSlotRegister> GetById(Guid id)
        {
            return await _dbContext.bookSlotRegisters.FindAsync(id);
        }

        public async Task<IEnumerable<BookSlotRegister>> GetAll()
        {
            return await _dbContext.bookSlotRegisters.ToListAsync();
        }

        public async Task AddBook(BookSlotRegister register)
        {
            _dbContext.bookSlotRegisters.Add(register);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateBook(BookSlotRegister register)
        {
            _dbContext.bookSlotRegisters.Update(register);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteBook(Guid id)
        {
            var register = await _dbContext.bookSlotRegisters.FindAsync(id);
            if (register != null)
            {
                _dbContext.bookSlotRegisters.Remove(register);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
*/