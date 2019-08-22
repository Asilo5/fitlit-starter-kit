const chai = require('chai');
const expect = chai.expect;


const mockHydrationData = require('../data/mock-hydration');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(mockHydrationData);
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('should return avg ounces of fluid per day for all time', () => {
    expect(hydration.avgFluidOzPerDayAllTimes(1)).to.equal(64);
  })

  it('should return fluid ounces from specific day', () => {
    expect(hydration.dayFluidOz("2019/06/16")).to.equal(69);
  })

  it('should return the amount of fluid ounces for each day in a week', () => {
    expect(hydration.fluidOzWeekly(1)).to.eql([37, 69, 96, 61, 91, 50, 50]);
  })
})