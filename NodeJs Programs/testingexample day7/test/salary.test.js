const assert = require("assert");
describe("Salary Calculation", () => {
    it("calculates salary after leaves", () => {
        const calculateSalaryAfterLeaves = (monthlySalary, workingDays, leaveDays) => {
            const perDaySalary = monthlySalary / workingDays;
            return monthlySalary - (leaveDays * perDaySalary);
        };

        const result = calculateSalaryAfterLeaves(30000, 30, 2);
        assert.equal(28000, result);
    });

    it("adds bonus to salary", () => {
        const addBonus = (salary, bonus) => salary + bonus;
        
        
    });
});
