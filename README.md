**How to run the Project.**
1- Download or Clone the Repository to the Computer.
2- Open the Project in VS Code or any other text Editor and run with live server.
3- You can also directly open the index.html file and see the project on web browser.

**Functionality**
This is Calendar Application where we can set Events to remind ourselves for certain events.
We can create events by following these steps.

1- Go to Data.js file, inside eventsData Array we have to change the start and end time of the event named as stime and etime.
2- We can set the events for whole day as well which is named with the allDayeventsData.
3- By Creating a new Object with Start(stime) and End(etime) time values we can see particular events on the browser.
4- Similary we can set the all day events with its required parameters.
5- Below is the Specified Foramat for stime and etime.
    time === 1
    ? "9:00AM"
    : time === 2
    ? "10:00AM"
    : time === 3
    ? "10:30AM"
    : time === 4
    ? "11:00AM"
    : time === 5
    ? "11:30AM"
    : time === 6
    ? "12:00PM"
    : time === 7
    ? "12:30PM"
    : time === 8
    ? "1:00PM"
    : time === 9
    ? "1:30PM"
    : time === 10
    ? "2:00PM"
    : time === 11
    ? "2:30PM"
    : time === 12
    ? "3:00PM"
    : time === 13
    ? "3:30PM"
    : time === 14
    ? "4:00PM"
    : time === 15
    ? "4:30PM"
    : time === 16
    ? "5:30PM"
    : time === 17
    ? "6:00PM"
    : time === 18
    ? "6:30PM"
    : time === 19
    ? "7:00PM"
    : time === 20
    ? "7:30PM"
    : time === 21
    ? "8:00PM"
    : time === 22
    ? "8:30PM"
    : "Wrong time";
    
 **Restrictions**
 We have some restrictions for this task is that we cannot add more than 4 or events in one row as it starts 
 to get out of the view or starts overlapping.So we have to be careful in adding events considering only one row. We may achieve this
 by changing their style when they reach to a certain limit they should appear in the form of dots and by hovering on the perticular dot we can see 
 the event's details.
