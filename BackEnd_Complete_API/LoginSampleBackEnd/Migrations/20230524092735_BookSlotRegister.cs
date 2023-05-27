using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoginSampleBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class BookSlotRegister : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "bookSlotRegisters",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    employeeId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    employeeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    department = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    seats = table.Column<int>(type: "int", nullable: false),
                    floor = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    roomNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    startTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    endTime = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bookSlotRegisters", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bookSlotRegisters");
        }
    }
}
