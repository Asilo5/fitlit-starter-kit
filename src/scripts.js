
let userRepo = new UserRepo(userData);
let activity = new Activity(activityData);
// let randomUser = Math.round(Math.random() * (50 - 1) + 1);
// let infoFromUser = userRepo.returnUserID(randomUser);
let user = new User(userRepo.getRandomUser());
let hydration = new Hydration(hydrationData);


$('.first-name').html(user.returnFirstName());

$('.id-from-user').html(user.id);

$('.day-water-consumption').html(hydration.dayFluidOz(user.id, "2019/06/17") )
// See how we can change the dates based of random
// We can randomise the dates


hydration.fluidOzWeekly(user.id).forEach((ounce) => {
  $('.daily-water-per-week').append(`<p> ${ounce} </p>`);
});


$('.avg-users-stepgoal').html(userRepo.returnAvgStepGoal());