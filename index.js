/* Your Code Here */

function createEmployeeRecord(array){
  const record = {
  firstName: array[0],
  familyName: array[1],
  title: array[2],
  payPerHour: array[3],
  timeInEvents: [],
  timeOutEvents: [],
  }
return record;
};

function createEmployeeRecords(arrayOfArrays){
    let employeeRecords=arrayOfArrays.map(element => createEmployeeRecord(element));
    return employeeRecords;
};
function createTimeInEvent(dateStamp){
    let record={};
    record.type="TimeIn";
    record.hour=+(dateStamp.slice(11));
    record.date=dateStamp.substring(0,10);
    

    this.timeInEvents.push(record);
    return this;    
};
function createTimeOutEvent(dateStamp){
    let record={};
    record.type="TimeOut";
    record.hour=+(dateStamp.slice(11));
    record.date=dateStamp.substring(0,10);
    

    this.timeOutEvents.push(record);
    return this;
};

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e=>e.date === date);
    const timeOut = this.timeOutEvents.find(e=>e.date === date);
  
    return   (timeOut.hour - timeIn.hour) *.01
};

function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date) * (this.payPerHour))
};


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e=>e.firstName === firstName)
  };
  
  function calculatePayroll (arrOfEmployeeRecords){
    const total = arrOfEmployeeRecords.map(e=>allWagesFor.call(e));
    const sumAll = total.reduce((accumulator, employeeTotal) => accumulator + employeeTotal);
    return sumAll
  };
  