---
title: "Battery charging: Full versus Partial"
slug: "battery-charging-full-versus-partial"
authors: "pedrolima"
date: "2018-04-27"
featured: true
categories:
  - "General"
images:
  - "/images/Charging-limit-option-on-Hyundai-Kona-Electric.avif"
---

Batteries are part of our lives. They are present in everyday devices such as electric cars, smartphones, tablets or laptops. For this reason it's important to know how to treat them right.

We already know that TMS (Thermal Management Systems) are important to keep batteries at recommended temperatures, but what about charging behavior? What can we do to reduce battery capacity degradation?

Is it better to cycle batteries with partial or full charges? And at lower or higher SoC (State-of-Charge)?

Let's find out!

Keep in mind that one cycle is completed only after you’ve discharged the equivalent of 100 % of your battery’s total capacity, but not necessarily all from one charge.

For example, if you have a battery at 70 % of SoC and discharge it to 50 %, then recharge it back to 70 %, you used 20 % of the battery capacity, which means that only after doing this 5 times (5 x 20 % = 100 %) you have completed one charge/discharge cycle. Some people confuse charge/discharge cycles with charging sessions...

[BMZ GmbH](https://www.bmz-group.com/EN_index_1000.html) - known for supplying batteries to StreetScooter electric vans - made some interesting tests on <a href="/icr18650-26f" target="_blank">Samsung ICR18650-26F</a> battery cells that answer the questions above.

![Test of Samsung ICR18650-26F battery cell by BMZ 1/2](images/Test-of-Samsung-ICR18650-26F-battery-cell-by-BMZ-1-2.avif)

The first chart shows us that we greatly reduce battery capacity degradation if we limit the maximum charge voltage. Nothing surprising here.

![Test of Samsung ICR18650-26F battery cell by BMZ 2/2](images/Test-of-Samsung-ICR18650-26F-battery-cell-by-BMZ-2-2.avif)

The second chart is the most interesting one. In here we see how many charge/discharge cycles the battery cell can handle before reaching the EOL (End-of-Life) - 70 % of the initial battery capacity - in different scenarios.

- Cycling from 100 to 0 % we get 500 cycles (25.000 kWh from a 50 kWh battery)
- Cycling from 100 to 10 % we get 500 cycles (25.000 kWh from a 50 kWh battery)
- Cycling from 100 to 20 % we get 1.000 cycles (50.000 kWh from a 50 kWh battery)

- Cycling from 90 to 0 % we get 1.500 cycles (75.000 kWh from a 50 kWh battery)
- Cycling from 90 to 10 % we get 1.500 cycles (75.000 kWh from a 50 kWh battery)
- Cycling from 90 to 20 % we get 2.000 cycles (100.000 kWh from a 50 kWh battery)

- Cycling from 80 to 0 % we get 3.000 cycles (150.000 kWh from a 50 kWh battery)
- Cycling from 80 to 10 % we get 3.000 cycles (150.000 kWh from a 50 kWh battery)
- Cycling from 80 to 20 % we get 3.500 cycles (175.000 kWh from a 50 kWh battery)

- Cycling from 70 to 0 % we get 5.000 cycles (250.000 kWh from a 50 kWh battery)
- Cycling from 70 to 10 % we get 5.500 cycles (275.000 kWh from a 50 kWh battery)
- Cycling from 70 to 20 % we get 6.000 cycles (300.000 kWh from a 50 kWh battery)

As you can see it's better to cycle battery cells at lower SoC. For example, if you decide to constantly fully charge a battery cell (100 %) and discharge it till 20 % you can expect 1.000 cycles until reaching the EOL. However, if you charge it till 80 % and discharge it fully (till 0 %), you can expect to triple the cycles (3.000) before reaching the EOL. In both cases you're only using 80 % of the total battery cell capacity.

Anyway, these battery cell tests were made at ideal temperature (25º C) and moderate C-rate (0,5 C) for both charging and discharging. But what do they tell us about electric car battery packs?

Electric cars already have BMS (Battery Management Systems) that prevent batteries from being fully charged or discharged, however BMS aren't created equal, some are more protective than others.

Most electric cars have BMS that allow them to use roughly 90 % of their total battery capacity (from 95 to 5 %), but in Chevrolet Volt's case only 60 % (Gen 1) or 75 % (Gen 2) is usable and that's why [Chevrolet Volt is a clear example that limiting the usable battery capacity is great to reduce degradation](https://insideevs.com/chevy-volt-400000-miles-odometer-no-noticeable-battery-degradation/).

Furthermore, not having the option to limit the charge to 80 % is one reason why some [Nissan Leaf 30 kWh batteries show signs of rapid degradation](/2018/03/20/nissan-leaf-battery-degradation-data-24-vs-30-kwh-batteries/).

Summing up, if you really want to take care of your battery try to limit charging to 70-80 % of its capacity, even if it means that sometimes you'll need to discharge it almost till empty. Of course this is only advisable if you already know your electric car's range limits and don't suffer from range anxiety.

Anyway, I hope that you find this article useful. Remember that electric cars are only environmentally conscious choices if their batteries are durable.

Thanks [Rodrigo Melo](http://www.linkedin.com/in/rnmentropy) for the heads up.
