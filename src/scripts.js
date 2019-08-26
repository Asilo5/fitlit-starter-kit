
let userRepo = new UserRepo(userData);
let randomUser = Math.round(Math.random() * (50 - 1) + 1);
let infoFromUser = userRepo.returnUserID(randomUser);
let user = new User(infoFromUser);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);


let firstName = user.returnFirstName();
$('.first-name').html(firstName);

$('.id-from-user').html(randomUser);

$('.day-water-consumption').html(hydration.dayFluidOz("2019/06/17") )
// See how we can change the dates based of random
// We can randomise the dates

hydration.fluidOzWeekly(randomUser).forEach((ounce) => {
  $('.daily-water-per-week').append(`<p> ${ounce} </p>`);
});

$('.avg-users-stepgoal').html(userRepo.returnAvgStepGoal());

$('.hours-sleep').html(sleep.hoursSleptOnDay(randomUser, "2019/06/17"));
$('.quality-sleep').html(sleep.qualitySleptOnDay(randomUser, "2019/06/17"));

sleep.hoursSleptWeekly(randomUser, "2019/06/16").forEach((hour) => {
  $('.sleep-hrs-weekly').append(`<p> ${hour} </p>`);
});

sleep.qualitySleptWeekly(randomUser, "2019/06/16").forEach((quality) => {
  $('.sleep-quality-weekly').append(`<p> ${quality} </p>`);
});


$('.avg-sleep-hours').html(sleep.dailyAvgNumHoursSlept(randomUser));
$('.avg-sleep-qual').html(sleep.avgQualityPerDayAllTime(randomUser));