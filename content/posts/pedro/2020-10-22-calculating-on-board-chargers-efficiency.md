---
title: "Calculating on-board chargers efficiency"
slug: "calculating-on-board-chargers-efficiency"
authors: "pedrolima"
date: "2020-10-22"
categories: 
  - "general"
images: 
  - "/images/On-board-charger-for-electric-car.avif"
---

In this article I'll show you how easy it's to estimate the on-board charger efficiency of an electric car by using WLTP ratings.

 

I'll use WLTP ratings in this article, but you can also use EPA or NEDC ratings, since they also measure plug-to-wheels consumption, this means that they include charging losses.

It's important to notice that for measuring the consumption the charging was made by using a domestic socket at low current (10 A) and some on-board chargers are not very efficient at low currents.

 

Let's start with some of Europe's most popular electric cars.

 

**Renault ZOE**

- **Range**: 395 km
- **Consumption**: 17,2 kWh/100 km (with charging loses)
- **Usable battery capacity**: 52 kWh

 

First we start by calculating the consumption without charging loses.

395 km - 52 kWh

100 km - X

X = 52 x 100 ÷ 395 = 13,164556962 kWh/100 km

 

Now if we divide that number with 17,2 kWh/100 km we'll get the on-board charger efficiency.

Y = 13,164556962 ÷ 17,2 = 0,765381218722 = 77 %

 

It's no secret that Renault's Chameleon on-board charger is not very efficient at low currents. However, Renault does seem to have made its on-board charger more efficient in the new generation of the ZOE. Previously, the [charging efficiency of the R90 models at 10 A was estimated at 71 %](/2016/12/17/renault-zoe-charging-time-efficiency/).

 

Now that you know the steps required to calculate the efficiency of an on-board charger, in next examples I'll just show you the final results.

 

**Renault Twingo ZE**

- **Range**: 190 km
- **Consumption**: 16 kWh/100 km (with charging loses) - 11,2 kWh/100 km (without charging loses)
- **Usable battery capacity**: 21,3 kWh
- **On-board charger efficiency**: 70 %

 

**Dacia Spring Electric**

- **Range**: 225 km
- **Consumption**: 14 kWh/100 km (with charging loses) - 11,9 kWh/100 km (without charging loses)
- **Usable battery capacity**: 26,8 kWh
- **On-board charger efficiency**: 85 %

 

**Volkswagen ID.3 Pro S**

- **Range**: 549 km
- **Consumption**: 15,9 kWh/100 km (with charging loses) - 14 kWh/100 km (without charging loses)
- **Usable battery capacity**: 77 kWh
- **On-board charger efficiency**: 88 %

 

**Volkswagen e-up**

- **Range**: 260 km
- **Consumption**: 14,4 kWh/100 km (with charging loses) - 12,4 kWh/100 km (without charging loses)
- **Usable battery capacity**: 32,3 kWh
- **On-board charger efficiency**: 86 %

 

**Peugeot e-208**

- **Range**: 340 km
- **Consumption**: 17,6 kWh/100 km (with charging loses) - 13,5 kWh/100 km (without charging loses)
- **Usable battery capacity**: 46 kWh
- **On-board charger efficiency**: 77 %

 

**Nissan LEAF**

- **Range**: 270 km
- **Consumption**: 17,1 kWh/100 km (with charging loses) - 13,3 kWh/100 km (without charging loses)
- **Usable battery capacity**: 36 kWh
- **On-board charger efficiency**: 78 %

 

**Kia e-Soul**

- **Range**: 452 km
- **Consumption**: 15,7 kWh/100 km (with charging loses) - 14,2 kWh/100 km (without charging loses)
- **Usable battery capacity**: 64 kWh
- **On-board charger efficiency**: 90 %

 

**Kia e-Niro**

- **Range**: 455 km
- **Consumption**: 15,9 kWh/100 km (with charging loses) - 14,1 kWh/100 km (without charging loses)
- **Usable battery capacity**: 64 kWh
- **On-board charger efficiency**: 88 %

 

Previously the Kia e-Niro was homologated with a WLTP range of 485 km, [but Kia revised the rating in December 2018](https://press.kia.com/eu/en/home/media-resouces/press-releases/2018/New_homologated_range_figures_for_Kia_e-Niro.html) and dropped it to 455 km. This change makes the on-charger efficiency estimation less reliable, because the e-Soul and e-Niro should have the same on-board charger, but we get different estimations.

 

**Hyundai Kona Electric**

- **Range**: 482 km
- **Consumption**: 14,7 kWh/100 km (with charging loses) - 13,3 kWh/100 km (without charging loses)
- **Usable battery capacity**: 64 kWh
- **On-board charger efficiency**: 90 %

 

**Hyundai IONIQ Electric**

- **Range**: 311 km
- **Consumption**: 13,8 kWh/100 km (with charging loses) - 12,3 kWh/100 km (without charging loses)
- **Usable battery capacity**: 38,3 kWh
- **On-board charger efficiency**: 89 %

 

**Tesla Model 3 LR**

- **Range**: 580 km
- **Consumption**: 16 kWh/100 km (with charging loses) - 12,6 kWh/100 km (without charging loses)
- **Usable battery capacity**: 73 kWh
- **On-board charger efficiency**: 79 %

 

Summing up...

 

**On-board charger efficiency estimations**

1. **Hyundai Kona Electric**: 90 %
2. **Kia e-Soul**: 90 %
3. **Hyundai IONIQ Electric**: 89 %
4. **Kia e-Niro**: 88 %
5. **Volkswagen ID.3 Pro S**: 88 %
6. **Volkswagen e-up**: 86 %
7. **Dacia Spring Electric**: 85 %
8. **Tesla Model 3 LR**: 79 %
9. **Nissan LEAF**: 78 %
10. **Peugeot e-208**: 77 %
11. **Renault ZOE**: 77 %
12. **Renault Twingo ZE**: 70 %

 

Anyway, remember that these estimations are for worst-case scenarios, by charging with domestic sockets at low current (10 A). If you charge at higher currents you can achieve better efficiency figures, especially if your electric car is a Renault.

If you can charge your electric car at 32 A, do it. Nowadays, a good portable EVSE with adjustable current is not that expensive.

 

Lastly, if you want to do your own calculations but can't find some variables, let me know.
