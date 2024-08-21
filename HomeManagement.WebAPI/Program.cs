using HomeManagement.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .WithOrigins("http://localhost:3000");
            Console.WriteLine("CORS policy applied: AllowAnyOrigin, AllowAnyHeader, AllowAnyMethod");
        });
});

var app = builder.Build();
Console.WriteLine("Application building...");

app.UseCors("AllowSpecificOrigin");

Console.WriteLine("CORS middleware applied...");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthorization();
app.MapControllers();
app.Run();

Console.WriteLine("Application is running...");
