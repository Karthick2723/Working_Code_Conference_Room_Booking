using LoginSampleBackEnd.Context;
using LoginSampleBackEnd.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using System;
using System.Linq;

[Route("api/bookslotregister")]
[ApiController]
public class BookSlotRegisterController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public BookSlotRegisterController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetBookSlotRegister()
    {
        var registee = _dbContext.bookSlotRegisters.ToList();
        return Ok(registee);
    }

    [HttpGet("{id}")]
    public IActionResult GetBookSlotRegister(Guid id)
    {
        var employee = _dbContext.bookSlotRegisters.FirstOrDefault(e => e.id == id);
        if (employee == null)
        {
            return NotFound();
        }
        return Ok(employee);
    }

/*    [HttpPost("roomRegister")]
    public IActionResult CreateBookSlotRegister([FromBody] BookSlotRegister registerObj)
    {
        registerObj.id = Guid.NewGuid();
        _dbContext.bookSlotRegisters.Add(registerObj);
        _dbContext.SaveChanges();
        return CreatedAtAction(nameof(GetBookSlotRegister), new { id = registerObj.id }, registerObj);

    }*/

    [HttpPost("bookSlot")]
    public async Task<IActionResult> CreateBookSlotRegister([FromBody] BookSlotRegister registerObj)
    {
        registerObj.id = Guid.NewGuid();
        _dbContext.bookSlotRegisters.Add(registerObj);
        _dbContext.SaveChanges();
        return CreatedAtAction(nameof(GetBookSlotRegister), new { id = registerObj.id }, registerObj);
    }


    [HttpPut("{id}")]
    public IActionResult UpdateBookSlotRegister(Guid id, BookSlotRegister updatedRegister)
    {
        var registee = _dbContext.bookSlotRegisters.FirstOrDefault(e => e.id == id);
        if (registee == null)
        {
            return NotFound();
        }
        registee.employeeId = updatedRegister.employeeId;
        registee.employeeName = updatedRegister.employeeName;
        registee.department = updatedRegister.department;
        registee.seats = updatedRegister.seats;
        registee.floor = updatedRegister.floor;
        registee.roomNumber = updatedRegister.roomNumber;
        registee.dateTime = updatedRegister.dateTime;
        registee.startTime = updatedRegister.startTime;
        registee.endTime = updatedRegister.endTime;

        _dbContext.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteBookSlotRegister(Guid id)
    {
        var registee = _dbContext.bookSlotRegisters.FirstOrDefault(e => e.id == id);
        if (registee == null)
        {
            return NotFound();
        }
        _dbContext.bookSlotRegisters.Remove(registee);
        _dbContext.SaveChanges();
        return NoContent();
    }
}