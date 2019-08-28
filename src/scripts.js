
let userRepo = new UserRepo(userData);
let user = new User(userRepo.getRandomUser());
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let activity = new Activity(activityData);

$('.first-name').html(user.returnFirstName());
$('.user-address').html(user.address);
$('.email-address').html(user.email);
$('.stride-length').html(user.strideLength);

$('.day-water-consumption').html(hydration.dayFluidOz(user.id, "2019/06/17") )

$('.daily-water-per-week').append(`
      <tr>
        <th>Day 1</th>
         <th>Day 2</th>
         <th>Day 3</th>
         <th>Day 4</th>
         <th>Day 5</th>
         <th>Day 6</th>
         <th>Day 7</th>
      <tr>`)
hydration.fluidOzWeekly(user.id).forEach((ounce) => {
  $('.daily-water-per-week').append(`
    <tr>
      <td>${ounce}oz</td>
    <tr>`)
});

$('.avg-users-stepgoal').html(userRepo.returnAvgStepGoal());

$('.hours-sleep').html(sleep.hoursSleptOnDay(user.id, "2019/06/17"));
$('.quality-sleep').html(sleep.qualitySleptOnDay(user.id, "2019/06/17"));


$('.sleep-hrs-weekly').append(`
      <tr>
        <th>Day 1</th>
         <th>Day 2</th>
         <th>Day 3</th>
         <th>Day 4</th>
         <th>Day 5</th>
         <th>Day 6</th>
         <th>Day 7</th>
      <tr>`)
sleep.hoursSleptWeekly(user.id, "2019/06/16").forEach((hour) => {
  $('.sleep-hrs-weekly').append(`
  <tr>
      <td>${hour}hrs</td>
   <tr>`);
});

$('.sleep-quality-weekly').append(`
      <tr>
        <th>Day 1</th>
         <th>Day 2</th>
         <th>Day 3</th>
         <th>Day 4</th>
         <th>Day 5</th>
         <th>Day 6</th>
         <th>Day 7</th>
      <tr>`)
sleep.qualitySleptWeekly(user.id, "2019/06/16").forEach((quality) => {
  $('.sleep-quality-weekly').append(`
    <tr>
       <td>${quality}</td>
   <tr>`);
});


$('.avg-sleep-hours').html(sleep.dailyAvgNumHoursSlept(user.id));
$('.avg-sleep-qual').html(sleep.avgQualityPerDayAllTime(user.id));
$('.eiffel-challenge').html(activity.eiffelTowerChallenge(user.id, "2019/06/16"))

// number of steps for the latest day 
$('.steps-day').html(activity.numberOfSteps(user.id, "2019/06/16"));
// Number of minutes active in day
$('.mins-active').html(activity.minsActiveOnDay(user.id, "2019/06/16"));
// Miles Walked in a day
$('.miles-walked').html(activity.milesWalkedOnDay(user.id, "2019/06/16", user.strideLength));
// User num steps, mins active, flights of stairs
// activity.weeklyReview(user.id, "2019/06/16").forEach((element) => {
//   $('.weekly-view').append(`<p> Step Count: ${element.numSteps} </p><p> Flights Climbed: ${element.flightsOfStairs} </p><p> Minutes Active: ${element.minutesActive} </p>`)
// })
