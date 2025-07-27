// Manual export of routes and schedules from data.ts to CSV (no regex, no parsing)
const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv');

const csvDir = path.join(__dirname, 'csv');

// ---- MANUALLY COPY DATA FROM data.ts BELOW ----

const routes = [
  {
    id: "12",
    name: "Route 12",
    color: "#5f4bb6",
    stops: [
      { id: "A", label: "A: Milton GO Station", lat: 43.517215, lng: -79.882439 },
      { id: "B", label: "B: McCuaig Dr & Thompson Rd S", lat: 43.515900, lng: -79.871900 },
      { id: "C", label: "C: Croft Ave & Laurier Ave", lat: 43.513900, lng: -79.857900 },
      { id: "D", label: "D: Clark Blvd & Fourth Line", lat: 43.505900, lng: -79.857000 },
      { id: "E", label: "E: Clark Blvd & Trudeau Dr", lat: 43.505900, lng: -79.848000 },
      { id: "3", label: "3: Louis St Laurent Ave & Trudeau Dr", lat: 43.500900, lng: -79.847000 },
    ],
    routeCoordinates: [
      [-79.882439, 43.517215],
      [-79.880000, 43.516000],
      [-79.877000, 43.515000],
      [-79.874000, 43.515500],
      [-79.872000, 43.514000],
      [-79.870000, 43.514500],
      [-79.868000, 43.512000],
      [-79.864000, 43.512500],
      [-79.860000, 43.513000],
      [-79.857900, 43.513900],
      [-79.857000, 43.510000],
      [-79.855000, 43.508000],
      [-79.852000, 43.507000],
      [-79.850000, 43.505900],
      [-79.857000, 43.505900],
      [-79.850000, 43.504000],
      [-79.848000, 43.505900],
      [-79.847000, 43.500900],
    ],
  },
  {
    id: "13",
    name: "Route 13",
    color: "#ff8800",
    stops: [
      { id: "A", label: "A: Milton GO Station", lat: 43.517215, lng: -79.882439 },
      { id: "1", label: "1: Main St E & Ontario St S", lat: 43.514800, lng: -79.882900 },
      { id: "B", label: "B: Ontario St N & Steeles Ave E", lat: 43.529000, lng: -79.876800 },
      { id: "C", label: "C: RR25/401 Park & Ride", lat: 43.540800, lng: -79.872800 },
      { id: "D", label: "D: High Point Dr & Derry Rd", lat: 43.545800, lng: -79.870000 },
      { id: "E", label: "E: Market Dr & Bronte St S", lat: 43.523000, lng: -79.900000 },
    ],
    routeCoordinates: [
      [-79.882439, 43.517215],
      [-79.880000, 43.517200],
      [-79.882900, 43.514800],
      [-79.882900, 43.520000],
      [-79.882900, 43.525000],
      [-79.876800, 43.529000],
      [-79.872800, 43.540800],
      [-79.870000, 43.545800],
      [-79.870000, 43.540000],
      [-79.880000, 43.540000],
      [-79.900000, 43.523000],
      [-79.900000, 43.523000],
      [-79.882900, 43.517215],
    ],
  },
  {
    id: "14",
    name: "Route 14",
    color: "#2ca58d",
    stops: [
      { id: "A", label: "A: Milton GO Station", lat: 43.517215, lng: -79.882439 },
      { id: "B", label: "B: Childs Dr & Thompson Rd S", lat: 43.517000, lng: -79.871000 },
      { id: "C", label: "C: Laurier Ave & Ontario St S", lat: 43.511000, lng: -79.887000 },
      { id: "D", label: "D: Hepburn Rd & Bronte St S", lat: 43.500900, lng: -79.900000 },
      { id: "5a", label: "5: Childs Dr & Ontario St S", lat: 43.523000, lng: -79.887000 },
      { id: "5b", label: "5: Yates Dr & Holly Ave", lat: 43.507000, lng: -79.872000 },
    ],
    routeCoordinates: [
      [-79.882439, 43.517215],
      [-79.880000, 43.517215],
      [-79.871000, 43.517000],
      [-79.887000, 43.511000],
      [-79.887000, 43.523000],
      [-79.872000, 43.507000],
      [-79.872000, 43.500900],
      [-79.900000, 43.500900],
      [-79.900000, 43.517215],
      [-79.882439, 43.517215],
    ],
  },
  {
    id: "15",
    name: "Route 15",
    color: "#d36eb6",
    stops: [
      { id: "A", label: "A: Milton GO Station", lat: 43.517215, lng: -79.882439 },
      { id: "4a", label: "4: Thompson Rd S & Childs Dr", lat: 43.511800, lng: -79.882000 },
      { id: "B", label: "B: Clark Blvd & Thompson Rd S", lat: 43.505900, lng: -79.882000 },
      { id: "4b", label: "4: Kennedy Cir & Louis St Laurent Ave", lat: 43.500900, lng: -79.888000 },
      { id: "C", label: "C: Bennett Blvd & Ferguson Dr", lat: 43.510800, lng: -79.868000 },
      { id: "D", label: "D: Fourth Line & Louis St Laurent Ave", lat: 43.500900, lng: -79.857000 },
    ],
    routeCoordinates: [
      [-79.882439, 43.517215],
      [-79.882000, 43.515000],
      [-79.882000, 43.511800],
      [-79.882000, 43.505900],
      [-79.888000, 43.505900],
      [-79.888000, 43.500900],
      [-79.870000, 43.500900],
      [-79.857000, 43.500900],
      [-79.857000, 43.507000],
      [-79.868000, 43.510800],
      [-79.868000, 43.505900],
      [-79.882000, 43.505900],
      [-79.882439, 43.517215],
    ],
  },
];

const schedules = [
  {
    routeId: '12',
    days: [
      {
        day: 'Monday to Friday',
        stops: ['A', 'B', 'C', 'D', 'E', '3'],
        times: [
          ['5:22 AM','5:29','5:34','5:42','5:51','5:57'],
          ['5:52 AM','5:59','6:04','6:12','6:21','6:27'],
          ['6:22 AM','6:29','6:34','6:42','6:51','6:57'],
          ['6:52 AM','6:59','7:04','7:12','7:21','7:27'],
          ['7:22 AM','7:29','7:34','7:42','7:51','7:57'],
          ['7:52 AM','7:59','8:04','8:12','8:21','8:27'],
          ['8:22 AM','8:29','8:34','8:42','8:51','8:57'],
          ['8:52 AM','8:59','9:04','9:12','9:21','9:27'],
          ['9:22 AM','9:29','9:34','9:42','9:51','9:57'],
          ['9:52 AM','9:59','10:04','10:12','10:21','10:27'],
          ['10:22 AM','10:29','10:34','10:42','10:51','10:57'],
          ['10:52 AM','10:59','11:04','11:12','11:21','11:27'],
          ['11:22 AM','11:29','11:34','11:42','11:51','11:57'],
          ['11:52 AM','11:59','12:04','12:12','12:21','12:27'],
          ['12:22 PM','12:29','12:34','12:42','12:51','12:57'],
          ['12:52 PM','12:59','1:04','1:12','1:21','1:27'],
          ['1:22 PM','1:29','1:34','1:42','1:51','1:57'],
          ['1:52 PM','1:59','2:04','2:12','2:21','2:27'],
          ['2:22 PM','2:29','2:34','2:42','2:51','2:57'],
          ['2:52 PM','2:59','3:04','3:12','3:21','3:27'],
          ['3:22 PM','3:29','3:34','3:42','3:51','3:57'],
          ['3:52 PM','3:59','4:04','4:12','4:21','4:27'],
          ['4:22 PM','4:29','4:34','4:42','4:51','4:57'],
          ['4:52 PM','4:59','5:04','5:12','5:21','5:27'],
          ['5:22 PM','5:29','5:34','5:42','5:51','5:57'],
          ['5:52 PM','5:59','6:04','6:12','6:21','6:27'],
          ['6:22 PM','6:29','6:34','6:42','6:51','6:57'],
          ['6:52 PM','6:59','7:04','7:12','7:21','7:27'],
          ['7:22 PM','7:29','7:34','7:42','7:51','7:57'],
          ['7:52 PM','7:59','8:04','8:12','8:21','8:27'],
          ['8:22 PM','8:29','8:34','8:42','8:51','8:57'],
          ['8:52 PM','8:59','9:04','9:12','9:21','9:27'],
        ]
      },
      {
        day: 'Saturday',
        stops: ['A', 'B', 'C', 'D', 'E', '3'],
        times: [
          ['7:30 AM','7:37','7:44','7:50','7:59','8:05'],
          ['8:00 AM','8:07','8:14','8:20','8:29','8:35'],
          ['8:30 AM','8:37','8:44','8:50','8:59','9:05'],
          ['9:00 AM','9:07','9:14','9:20','9:29','9:35'],
          ['9:30 AM','9:37','9:44','9:50','9:59','10:05'],
          ['10:00 AM','10:07','10:14','10:20','10:29','10:35'],
          ['10:30 AM','10:37','10:44','10:50','10:59','11:05'],
          ['11:00 AM','11:07','11:14','11:20','11:29','11:35'],
          ['11:30 AM','11:37','11:44','11:50','11:59','12:05'],
          ['12:00 PM','12:07','12:14','12:20','12:29','12:35'],
          ['12:30 PM','12:37','12:44','12:50','12:59','1:05'],
          ['1:00 PM','1:07','1:14','1:20','1:29','1:35'],
          ['1:30 PM','1:37','1:44','1:50','1:59','2:05'],
          ['2:00 PM','2:07','2:14','2:20','2:29','2:35'],
          ['2:30 PM','2:37','2:44','2:50','2:59','3:05'],
          ['3:00 PM','3:07','3:14','3:20','3:29','3:35'],
          ['3:30 PM','3:37','3:44','3:50','3:59','4:05'],
          ['4:00 PM','4:07','4:14','4:20','4:29','4:35'],
          ['4:30 PM','4:37','4:44','4:50','4:59','5:05'],
          ['5:00 PM','5:07','5:14','5:20','5:29','5:35'],
          ['5:30 PM','5:37','5:44','5:50','5:59','6:05'],
          ['6:00 PM','6:07','6:14','6:20','6:29','6:35'],
          ['6:30 PM','6:37','6:44','6:50','6:59','7:05'],
          ['7:00 PM','7:07','7:14','7:20','7:29','7:35'],
        ]
      },
    ],
  },
  // ... (copy the rest of the schedules array from data.ts here)
];

const feedbackData = [
  { id: 1, time: "12:02", date: "July 21st", remarks: "Bus was clean and the driver was very friendly.", route: "12", waiting: "11 minutes", routeTime: "11 minutes", rating: 4, important: true },
  { id: 2, time: "13:15", date: "July 22nd", remarks: "Waited a bit too long at the stop, but the ride was smooth.", route: "13", waiting: "7 minutes", routeTime: "10 minutes", rating: 2 },
  { id: 3, time: "14:30", date: "July 23rd", remarks: "Appreciated the air conditioning on a hot day!", route: "14", waiting: "15 minutes", routeTime: "13 minutes", rating: 5 },
  { id: 4, time: "15:45", date: "July 24th", remarks: "Bus arrived early and I almost missed it.", route: "12", waiting: "5 minutes", routeTime: "9 minutes", rating: 3, important: true },
  { id: 5, time: "16:00", date: "July 25th", remarks: "The bus was overcrowded and uncomfortable.", route: "15", waiting: "20 minutes", routeTime: "18 minutes", rating: 1 },
  { id: 6, time: "17:10", date: "July 26th", remarks: "Driver was helpful with directions.", route: "13", waiting: "8 minutes", routeTime: "12 minutes", rating: 4 },
  { id: 7, time: "18:20", date: "July 27th", remarks: "The bus was late, but the ride was quick.", route: "14", waiting: "12 minutes", routeTime: "14 minutes", rating: 2 },
  { id: 8, time: "19:30", date: "July 28th", remarks: "Great experience overall, will use again.", route: "15", waiting: "10 minutes", routeTime: "11 minutes", rating: 5 },
  { id: 9, time: "08:05", date: "July 29th", remarks: "Bus was on time and the seats were comfortable.", route: "12", waiting: "3 minutes", routeTime: "8 minutes", rating: 5 },
  { id: 10, time: "09:40", date: "July 29th", remarks: "Missed my stop because the driver didn't announce it.", route: "13", waiting: "6 minutes", routeTime: "10 minutes", rating: 2, important: true },
  { id: 11, time: "10:15", date: "July 30th", remarks: "Loved the free WiFi on the bus!", route: "14", waiting: "9 minutes", routeTime: "12 minutes", rating: 4 },
  { id: 12, time: "11:50", date: "July 30th", remarks: "Bus was delayed due to traffic, but the driver kept us informed.", route: "15", waiting: "18 minutes", routeTime: "20 minutes", rating: 3 },
  { id: 13, time: "13:25", date: "July 31st", remarks: "The bus was very clean and smelled fresh.", route: "12", waiting: "4 minutes", routeTime: "9 minutes", rating: 5 },
  { id: 14, time: "14:55", date: "July 31st", remarks: "Driver was rude when I asked a question.", route: "13", waiting: "10 minutes", routeTime: "13 minutes", rating: 1, important: true },
  { id: 15, time: "16:10", date: "August 1st", remarks: "Quick and efficient ride, no complaints.", route: "14", waiting: "7 minutes", routeTime: "10 minutes", rating: 4 },
  { id: 16, time: "17:35", date: "August 1st", remarks: "Standing room only, but the ride was fast.", route: "15", waiting: "12 minutes", routeTime: "15 minutes", rating: 3 },
  { id: 17, time: "18:50", date: "August 2nd", remarks: "The bus was late and very crowded.", route: "12", waiting: "16 minutes", routeTime: "17 minutes", rating: 2 },
  { id: 18, time: "20:05", date: "August 2nd", remarks: "Excellent service, will recommend to friends.", route: "13", waiting: "5 minutes", routeTime: "8 minutes", rating: 5 },
  { id: 19, time: "21:20", date: "August 3rd", remarks: "The bus was too cold inside.", route: "14", waiting: "8 minutes", routeTime: "11 minutes", rating: 3 },
  { id: 20, time: "22:35", date: "August 3rd", remarks: "Driver waited for me when I was running late. Thank you!", route: "15", waiting: "2 minutes", routeTime: "7 minutes", rating: 5, important: true },
];

const userPositions = [
  { id: 'u1', lat: 43.5200, lng: -79.8800, busStopId: 'A' },
  { id: 'u2', lat: 43.5100, lng: -79.8700, busStopId: 'B' },
  { id: 'u3', lat: 43.5150, lng: -79.8600, busStopId: 'C' },
  { id: 'u4', lat: 43.5050, lng: -79.8650, busStopId: 'D' },
  { id: 'u5', lat: 43.5180, lng: -79.8750, busStopId: 'E' },
  { id: 'u6', lat: 43.5080, lng: -79.8780, busStopId: '1' },
  { id: 'u7', lat: 43.5130, lng: -79.8820, busStopId: 'B' },
  { id: 'u8', lat: 43.5110, lng: -79.8720, busStopId: 'C' },
  { id: 'u9', lat: 43.5160, lng: -79.8680, busStopId: 'D' },
  { id: 'u10', lat: 43.5140, lng: -79.8600, busStopId: 'E' },
  { id: 'u11', lat: 43.5070, lng: -79.8770, busStopId: 'A' },
  { id: 'u12', lat: 43.5190, lng: -79.8620, busStopId: 'B' },
  { id: 'u13', lat: 43.5120, lng: -79.8800, busStopId: 'C' },
  { id: 'u14', lat: 43.5090, lng: -79.8650, busStopId: 'D' },
  { id: 'u15', lat: 43.5170, lng: -79.8700, busStopId: 'E' },
  { id: 'u16', lat: 43.5060, lng: -79.8720, busStopId: '1' },
  { id: 'u17', lat: 43.5200, lng: -79.8600, busStopId: 'B' },
  { id: 'u18', lat: 43.5130, lng: -79.8750, busStopId: 'C' },
  { id: 'u19', lat: 43.5150, lng: -79.8780, busStopId: 'D' },
  { id: 'u20', lat: 43.5080, lng: -79.8680, busStopId: 'E' },
  { id: 'u21', lat: 43.5140, lng: -79.8800, busStopId: 'A' },
  { id: 'u22', lat: 43.5090, lng: -79.8620, busStopId: 'B' },
  { id: 'u23', lat: 43.5160, lng: -79.8650, busStopId: 'C' },
  { id: 'u24', lat: 43.5070, lng: -79.8700, busStopId: 'D' },
  { id: 'u25', lat: 43.5190, lng: -79.8780, busStopId: 'E' },
  { id: 'u26', lat: 43.5100, lng: -79.8600, busStopId: '1' },
  { id: 'u27', lat: 43.5150, lng: -79.8720, busStopId: 'B' },
  { id: 'u28', lat: 43.5060, lng: -79.8650, busStopId: 'C' },
  { id: 'u29', lat: 43.5180, lng: -79.8700, busStopId: 'D' },
  { id: 'u30', lat: 43.5110, lng: -79.8780, busStopId: 'E' },
  { id: 'u31', lat: 43.5140, lng: -79.8620, busStopId: 'A' },
  { id: 'u32', lat: 43.5090, lng: -79.8800, busStopId: 'B' },
  { id: 'u33', lat: 43.5170, lng: -79.8650, busStopId: 'C' },
  { id: 'u34', lat: 43.5080, lng: -79.8720, busStopId: 'D' },
  { id: 'u35', lat: 43.5130, lng: -79.8600, busStopId: 'E' },
  { id: 'u36', lat: 43.5200, lng: -79.8680, busStopId: '1' },
  { id: 'u37', lat: 43.5120, lng: -79.8650, busStopId: 'B' },
  { id: 'u38', lat: 43.5090, lng: -79.8700, busStopId: 'C' },
  { id: 'u39', lat: 43.5160, lng: -79.8780, busStopId: 'D' },
  { id: 'u40', lat: 43.5070, lng: -79.8620, busStopId: 'E' },
  { id: 'u41', lat: 43.5190, lng: -79.8650, busStopId: 'A' },
  { id: 'u42', lat: 43.5100, lng: -79.8720, busStopId: 'B' },
  { id: 'u43', lat: 43.5150, lng: -79.8680, busStopId: 'C' },
  { id: 'u44', lat: 43.5060, lng: -79.8780, busStopId: 'D' },
  { id: 'u45', lat: 43.5180, lng: -79.8620, busStopId: 'E' },
  { id: 'u46', lat: 43.5110, lng: -79.8650, busStopId: '1' },
  { id: 'u47', lat: 43.5140, lng: -79.8700, busStopId: 'B' },
  { id: 'u48', lat: 43.5090, lng: -79.8780, busStopId: 'C' },
  { id: 'u49', lat: 43.5170, lng: -79.8620, busStopId: 'D' },
  { id: 'u50', lat: 43.5080, lng: -79.8650, busStopId: 'E' },
];

const demoTrips = [
  { id: 'trip1', uID: 'user1', routeId: '12', startTime: '2024-07-21T08:05:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-21T07:55:00', waitEnd: '2024-07-21T08:00:00', endTime: '2024-07-21T08:25:00', startStopId: '12:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '12:E: Clark Blvd & Trudeau Dr', endStopLat: 43.505900, endStopLng: -79.848000, duration: 20 },
  { id: 'trip2', uID: 'user2', routeId: '13', startTime: '2024-07-21T09:10:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-21T09:00:00', waitEnd: '2024-07-21T09:05:00', endTime: '2024-07-21T09:35:00', startStopId: '13:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '13:E: Market Dr & Bronte St S', endStopLat: 43.523000, endStopLng: -79.900000, duration: 25 },
  { id: 'trip3', uID: 'user3', routeId: '14', startTime: '2024-07-21T10:20:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-21T10:10:00', waitEnd: '2024-07-21T10:15:00', endTime: '2024-07-21T10:40:00', startStopId: '14:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '14:D: Hepburn Rd & Bronte St S', endStopLat: 43.500900, endStopLng: -79.900000, duration: 20 },
  { id: 'trip4', uID: 'user4', routeId: '15', startTime: '2024-07-21T11:00:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-21T10:50:00', waitEnd: '2024-07-21T10:55:00', endTime: '2024-07-21T11:22:00', startStopId: '15:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '15:D: Fourth Line & Louis St Laurent Ave', endStopLat: 43.500900, endStopLng: -79.857000, duration: 22 },
  { id: 'trip5', uID: 'user5', routeId: '12', startTime: '2024-07-21T12:15:00', startLat: 43.515900, startLng: -79.871900, waitStart: '2024-07-21T12:05:00', waitEnd: '2024-07-21T12:10:00', endTime: '2024-07-21T12:35:00', startStopId: '12:B: McCuaig Dr & Thompson Rd S', startStopLat: 43.515900, startStopLng: -79.871900, endStopId: '12:C: Croft Ave & Laurier Ave', endStopLat: 43.513900, endStopLng: -79.857900, duration: 20 },
  { id: 'trip21', uID: 'user21', routeId: '12', startTime: '2024-07-23T08:10:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-23T08:00:00', waitEnd: '2024-07-23T08:05:00', endTime: '2024-07-23T08:30:00', startStopId: '12:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '12:3: Louis St Laurent Ave & Trudeau Dr', endStopLat: 43.500900, endStopLng: -79.847000, duration: 20 },
  { id: 'trip22', uID: 'user22', routeId: '13', startTime: '2024-07-23T09:20:00', startLat: 43.514800, startLng: -79.882900, waitStart: '2024-07-23T09:10:00', waitEnd: '2024-07-23T09:15:00', endTime: '2024-07-23T09:45:00', startStopId: '13:1: Main St E & Ontario St S', startStopLat: 43.514800, startStopLng: -79.882900, endStopId: '13:B: Ontario St N & Steeles Ave E', endStopLat: 43.529000, endStopLng: -79.876800, duration: 25 },
  { id: 'trip23', uID: 'user23', routeId: '14', startTime: '2024-07-23T10:30:00', startLat: 43.511000, startLng: -79.887000, waitStart: '2024-07-23T10:20:00', waitEnd: '2024-07-23T10:25:00', endTime: '2024-07-23T10:50:00', startStopId: '14:C: Laurier Ave & Ontario St S', startStopLat: 43.511000, startStopLng: -79.887000, endStopId: '14:5a: Childs Dr & Ontario St S', endStopLat: 43.523000, endStopLng: -79.887000, duration: 20 },
  { id: 'trip24', uID: 'user24', routeId: '15', startTime: '2024-07-23T11:15:00', startLat: 43.500900, startLng: -79.888000, waitStart: '2024-07-23T11:05:00', waitEnd: '2024-07-23T11:10:00', endTime: '2024-07-23T11:35:00', startStopId: '15:4b: Kennedy Cir & Louis St Laurent Ave', startStopLat: 43.500900, startStopLng: -79.888000, endStopId: '15:D: Fourth Line & Louis St Laurent Ave', endStopLat: 43.500900, endStopLng: -79.857000, duration: 20 },
  { id: 'trip25', uID: 'user25', routeId: '12', startTime: '2024-07-23T12:25:00', startLat: 43.505900, startLng: -79.857000, waitStart: '2024-07-23T12:15:00', waitEnd: '2024-07-23T12:20:00', endTime: '2024-07-23T12:45:00', startStopId: '12:D: Clark Blvd & Fourth Line', startStopLat: 43.505900, startStopLng: -79.857000, endStopId: '12:E: Clark Blvd & Trudeau Dr', endStopLat: 43.505900, endStopLng: -79.848000, duration: 20 },
  { id: 'trip26', uID: 'user26', routeId: '13', startTime: '2024-07-23T13:40:00', startLat: 43.540800, startLng: -79.872800, waitStart: '2024-07-23T13:30:00', waitEnd: '2024-07-23T13:35:00', endTime: '2024-07-23T14:00:00', startStopId: '13:C: RR25/401 Park & Ride', startStopLat: 43.540800, startStopLng: -79.872800, endStopId: '13:D: High Point Dr & Derry Rd', endStopLat: 43.545800, endStopLng: -79.870000, duration: 20 },
  { id: 'trip27', uID: 'user27', routeId: '14', startTime: '2024-07-23T14:55:00', startLat: 43.523000, startLng: -79.887000, waitStart: '2024-07-23T14:45:00', waitEnd: '2024-07-23T14:50:00', endTime: '2024-07-23T15:15:00', startStopId: '14:5a: Childs Dr & Ontario St S', startStopLat: 43.523000, startStopLng: -79.887000, endStopId: '14:5b: Yates Dr & Holly Ave', endStopLat: 43.507000, endStopLng: -79.872000, duration: 20 },
  { id: 'trip28', uID: 'user28', routeId: '15', startTime: '2024-07-23T15:20:00', startLat: 43.505900, startLng: -79.882000, waitStart: '2024-07-23T15:10:00', waitEnd: '2024-07-23T15:15:00', endTime: '2024-07-23T15:40:00', startStopId: '15:B: Clark Blvd & Thompson Rd S', startStopLat: 43.505900, startStopLng: -79.882000, endStopId: '15:4a: Thompson Rd S & Childs Dr', endStopLat: 43.511800, endStopLng: -79.882000, duration: 20 },
  { id: 'trip29', uID: 'user29', routeId: '12', startTime: '2024-07-23T16:30:00', startLat: 43.517215, startLng: -79.882439, waitStart: '2024-07-23T16:20:00', waitEnd: '2024-07-23T16:25:00', endTime: '2024-07-23T16:50:00', startStopId: '12:A: Milton GO Station', startStopLat: 43.517215, startStopLng: -79.882439, endStopId: '12:B: McCuaig Dr & Thompson Rd S', endStopLat: 43.515900, endStopLng: -79.871900, duration: 20 },
  { id: 'trip30', uID: 'user30', routeId: '13', startTime: '2024-07-23T17:45:00', startLat: 43.514800, startLng: -79.882900, waitStart: '2024-07-23T17:35:00', waitEnd: '2024-07-23T17:40:00', endTime: '2024-07-23T18:05:00', startStopId: '13:1: Main St E & Ontario St S', startStopLat: 43.514800, startStopLng: -79.882900, endStopId: '13:E: Market Dr & Bronte St S', endStopLat: 43.523000, endStopLng: -79.900000, duration: 20 },
];

// ---- END MANUAL DATA ----

// Write CSV helper
function writeCsv(filename, data) {
  if (!data || data.length === 0) return;
  const csv = parse(data);
  fs.writeFileSync(path.join(csvDir, filename), csv, 'utf-8');
}

// Export routes (flatten stops and routeCoordinates)
const stops = [];
const routeCoordinates = [];
routes.forEach(route => {
  const { id, name, color } = route;
  route.stops.forEach(stop => {
    stops.push({ routeId: id, routeName: name, color, ...stop });
  });
  route.routeCoordinates.forEach((coord, idx) => {
    routeCoordinates.push({ routeId: id, routeName: name, color, order: idx, lng: coord[0], lat: coord[1] });
  });
});
writeCsv('stops.csv', stops);
writeCsv('routeCoordinates.csv', routeCoordinates);

// Export schedules (flattened)
const schedRows = [];
schedules.forEach(sched => {
  const routeId = sched.routeId;
  sched.days.forEach(day => {
    const dayName = day.day;
    const stops = day.stops;
    day.times.forEach(row => {
      const rowObj = { routeId, day: dayName };
      stops.forEach((stop, i) => {
        rowObj[`stop_${stop}`] = row[i];
      });
      schedRows.push(rowObj);
    });
  });
});
writeCsv('schedules.csv', schedRows);

// Export feedbackData, userPositions, demoTrips
writeCsv('feedbackData.csv', feedbackData);
writeCsv('userPositions.csv', userPositions);
writeCsv('demoTrips.csv', demoTrips);

console.log('✅ Routes and schedules exported to csv/'); 