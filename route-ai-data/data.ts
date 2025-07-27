// Central data and types for dashboard

export interface FeedbackType {
  id: number;
  time: string;
  date: string;
  remarks: string;
  route: string;
  waiting: string;
  routeTime: string;
  rating: number;
  important?: boolean;
}

export const feedbackData: FeedbackType[] = [
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

export const routeColors: Record<string, string> = {
  '10': 'bg-yellow-500',
  '11': 'bg-red-500',
  '12': 'bg-blue-500',
  '13': 'bg-green-500',
  '14': 'bg-orange-500',
  '15': 'bg-purple-500',
};

export interface InsightType {
  id: number;
  title: string;
  subtitle?: string;
  date: string; // e.g., '2024-07-21'
  time: string; // e.g., '14:30'
  insight?: any; // full insight contents
}

export const insightsData: InsightType[] = [
];

// Add a new insight to insightsData (in-memory only)
export function addInsight(insight: Omit<InsightType, 'id'>) {
  const newId = insightsData.length > 0 ? Math.max(...insightsData.map(i => i.id)) + 1 : 1;
  insightsData.push({ id: newId, ...insight });
}

// Bus route stops and route coordinates for the Milton map

export const routes = [
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
      // Milton GO Station (A)
      [-79.882439, 43.517215],
      // Childs Dr east (B)
      [-79.880000, 43.517215],
      [-79.871000, 43.517000],
      // Ontario St S south (C)
      [-79.887000, 43.511000],
      // Laurier Ave west
      [-79.887000, 43.523000], // 5a
      // Yates Dr south
      [-79.872000, 43.507000], // 5b
      // Holly Ave south
      [-79.872000, 43.500900],
      // Hepburn Rd west (D)
      [-79.900000, 43.500900],
      // Bronte St N north
      [-79.900000, 43.517215],
      // Back to Milton GO Station
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
      // Milton GO Station (A)
      [-79.882439, 43.517215],
      // Thompson Rd S south
      [-79.882000, 43.515000],
      [-79.882000, 43.511800], // 4a
      [-79.882000, 43.505900], // B
      // Kennedy Cir west
      [-79.888000, 43.505900],
      [-79.888000, 43.500900], // 4b
      // Louis St Laurent Ave east
      [-79.870000, 43.500900],
      [-79.857000, 43.500900], // D
      // Clark Blvd north
      [-79.857000, 43.507000],
      [-79.868000, 43.510800], // C
      // Ferguson Dr south
      [-79.868000, 43.505900],
      // Clark Blvd west
      [-79.882000, 43.505900],
      // Back to Milton GO Station
      [-79.882439, 43.517215],
    ],
  },
];

// For backwards compatibility (route 12 as default)
export const stops = routes[0].stops;
export const routeCoordinates = routes[0].routeCoordinates;

// Example user positions for heatmap (randomized for demo)
export interface UserPosition {
  id: string;
  lat: number;
  lng: number;
  busStopId: string; // id of the stop the user is heading to
}

// For mapping, use stops from routes[0] and routes[1] for variety
const allStops = [
  ...routes[0].stops,
  ...routes[1].stops,
  ...routes[2].stops,
  ...routes[3].stops,
];

export const userPositions: UserPosition[] = [
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

// People waiting at bus stops
export interface WaitingUser {
  id: string;
  lat: number;
  lng: number;
  busStopId: string;
}

// Use all stops from all routes, with varied user counts
const allStopsForWaiting = [
  ...routes[0].stops,
  ...routes[1].stops,
  ...routes[2].stops,
  ...routes[3].stops,
];

// Assign a different number of users to each stop
export const waitingUsers: WaitingUser[] = [
  // Route 12 stops
  ...Array.from({ length: 3 }, (_, i) => ({ id: `w1A${i+1}`, lat: 43.517215, lng: -79.882439, busStopId: 'A' })),
  ...Array.from({ length: 7 }, (_, i) => ({ id: `w1B${i+1}`, lat: 43.515900, lng: -79.871900, busStopId: 'B' })),
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w1C${i+1}`, lat: 43.513900, lng: -79.857900, busStopId: 'C' })),
  ...Array.from({ length: 10 }, (_, i) => ({ id: `w1D${i+1}`, lat: 43.505900, lng: -79.857000, busStopId: 'D' })),
  ...Array.from({ length: 1 }, (_, i) => ({ id: `w1E${i+1}`, lat: 43.505900, lng: -79.848000, busStopId: 'E' })),
  ...Array.from({ length: 4 }, (_, i) => ({ id: `w13${i+1}`, lat: 43.500900, lng: -79.847000, busStopId: '3' })),
  // Route 13 stops
  ...Array.from({ length: 5 }, (_, i) => ({ id: `w2A${i+1}`, lat: 43.517215, lng: -79.882439, busStopId: 'A' })),
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w21${i+1}`, lat: 43.514800, lng: -79.882900, busStopId: '1' })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `w2B${i+1}`, lat: 43.529000, lng: -79.876800, busStopId: 'B' })),
  ...Array.from({ length: 1 }, (_, i) => ({ id: `w2C${i+1}`, lat: 43.540800, lng: -79.872800, busStopId: 'C' })),
  ...Array.from({ length: 6 }, (_, i) => ({ id: `w2D${i+1}`, lat: 43.545800, lng: -79.870000, busStopId: 'D' })),
  ...Array.from({ length: 3 }, (_, i) => ({ id: `w2E${i+1}`, lat: 43.523000, lng: -79.900000, busStopId: 'E' })),
  // Route 14 stops
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w3A${i+1}`, lat: 43.517215, lng: -79.882439, busStopId: 'A' })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `w3B${i+1}`, lat: 43.517000, lng: -79.871000, busStopId: 'B' })),
  ...Array.from({ length: 1 }, (_, i) => ({ id: `w3C${i+1}`, lat: 43.511000, lng: -79.887000, busStopId: 'C' })),
  ...Array.from({ length: 4 }, (_, i) => ({ id: `w3D${i+1}`, lat: 43.500900, lng: -79.900000, busStopId: 'D' })),
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w35a${i+1}`, lat: 43.523000, lng: -79.887000, busStopId: '5a' })),
  ...Array.from({ length: 7 }, (_, i) => ({ id: `w35b${i+1}`, lat: 43.507000, lng: -79.872000, busStopId: '5b' })),
  // Route 15 stops
  ...Array.from({ length: 3 }, (_, i) => ({ id: `w4A${i+1}`, lat: 43.517215, lng: -79.882439, busStopId: 'A' })),
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w44a${i+1}`, lat: 43.511800, lng: -79.882000, busStopId: '4a' })),
  ...Array.from({ length: 5 }, (_, i) => ({ id: `w4B${i+1}`, lat: 43.505900, lng: -79.882000, busStopId: 'B' })),
  ...Array.from({ length: 1 }, (_, i) => ({ id: `w44b${i+1}`, lat: 43.500900, lng: -79.888000, busStopId: '4b' })),
  ...Array.from({ length: 6 }, (_, i) => ({ id: `w4C${i+1}`, lat: 43.510800, lng: -79.868000, busStopId: 'C' })),
  ...Array.from({ length: 2 }, (_, i) => ({ id: `w4D${i+1}`, lat: 43.500900, lng: -79.857000, busStopId: 'D' })),
];

// Bus data for map
export interface Bus {
  id: string;
  lat: number;
  lng: number;
  routeId: string;
  nextStopId: string;
  totalPassengers: number;
}

// Example: 4 buses, one for each route (12, 13, 14, 15), each with a position, next stop, and passenger count
export const buses: Bus[] = [
  { id: 'bus12', lat: 43.517, lng: -79.882, routeId: '12', nextStopId: 'A', totalPassengers: 18 },
  { id: 'bus13', lat: 43.5148, lng: -79.8829, routeId: '13', nextStopId: '1', totalPassengers: 22 },
  { id: 'bus14', lat: 43.517, lng: -79.871, routeId: '14', nextStopId: 'B', totalPassengers: 15 },
  { id: 'bus15', lat: 43.5118, lng: -79.882, routeId: '15', nextStopId: '4a', totalPassengers: 27 },
];

// Schedules for routes
export const schedules = [
  ...[ // The original schedules array, but with times rows fixed
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
    {
      routeId: '13',
      days: [
        {
          day: 'Monday to Friday',
          stops: ['A', '1', 'B', 'C', 'D', 'E'],
          times: [
            ['5:22 AM','5:29','5:32','5:36','5:41','5:50'],
            ['5:52 AM','5:59','6:02','6:06','6:11','6:20'],
            ['6:22 AM','6:29','6:32','6:36','6:41','6:50'],
            ['6:40 AM','6:47','6:50','6:54','6:59','7:08'],
            ['6:52 AM','6:59','7:02','7:06','7:11','7:20'],
            ['7:22 AM','7:29','7:32','7:36','7:41','7:50'],
            ['7:52 AM','7:59','8:02','8:06','8:11','8:20'],
            ['8:22 AM','8:29','8:32','8:36','8:41','8:50'],
            ['8:32 AM','8:39','8:42','8:46','8:51','9:00'],
            ['8:52 AM','8:59','9:02','9:06','9:11','9:20'],
            ['9:22 AM','9:29','9:32','9:36','9:41','9:50'],
            ['9:52 AM','9:59','10:02','10:06','10:11','10:20'],
            ['10:22 AM','10:29','10:32','10:36','10:41','10:50'],
            ['10:52 AM','10:59','11:02','11:06','11:11','11:20'],
            ['11:22 AM','11:29','11:32','11:36','11:41','11:50'],
            ['11:32 AM','11:39','11:42','11:46','11:51','12:00'],
            ['12:12 PM','12:19','12:22','12:26','12:31','12:40'],
            ['12:42 PM','12:49','12:52','12:56','1:01','1:10'],
            ['1:12 PM','1:19','1:22','1:26','1:31','1:40'],
            ['1:42 PM','1:49','1:52','1:56','2:01','2:10'],
            ['2:12 PM','2:19','2:22','2:26','2:31','2:40'],
            ['2:42 PM','2:49','2:52','2:56','3:01','3:10'],
            ['3:12 PM','3:19','3:22','3:26','3:31','3:40'],
            ['3:50 PM','3:57','4:00','4:04','4:09','4:18'],
            ['4:20 PM','4:27','4:30','4:34','4:39','4:48'],
            ['4:50 PM','4:57','5:00','5:04','5:09','5:18'],
            ['5:20 PM','5:27','5:30','5:34','5:39','5:48'],
            ['5:50 PM','5:57','6:00','6:04','6:09','6:18'],
            ['6:20 PM','6:27','6:30','6:34','6:39','6:48'],
            ['6:35 PM','6:42','6:45','6:49','6:54','7:03'],
            ['7:05 PM','7:12','7:15','7:19','7:24','7:33'],
            ['7:35 PM','7:42','7:45','7:49','7:54','8:03'],
            ['8:05 PM','8:12','8:15','8:19','8:24','8:33'],
            ['8:35 PM','8:42','8:45','8:49','8:54','9:03'],
            ['9:05 PM','9:12','9:15','9:19','9:24','9:33'],
            ['9:20 PM','9:27','9:30','9:34','9:39','9:48'],
            ['9:50 PM','9:57','10:00','10:04','10:09','10:18'],
          ]
        },
        {
          day: 'Saturday',
          stops: ['A', '1', 'B', 'C', 'D', 'E'],
          times: [
            ['7:30 AM','7:37','7:40','7:44','7:49','7:58'],
            ['12:00 PM','12:07','12:10','12:14','12:19','12:28'],
            ['3:45 PM','3:52','3:55','3:59','4:04','4:13'],
            ['4:30 PM','4:37','4:40','4:44','4:49','4:58'],
            ['7:00 PM','7:07','7:10','7:14','7:19','7:28'],
          ]
        },
      ],
    },
    {
      routeId: '14',
      days: [
        {
          day: 'Monday to Friday',
          stops: ['A', 'B', 'C', 'D', '5a', '5b'],
          times: [
            ['5:52 AM','5:55','5:59','6:04','6:11','6:15'],
            ['6:22 AM','6:25','6:29','6:34','6:41','6:45'],
            ['6:52 AM','6:55','6:59','7:04','7:11','7:15'],
            ['7:22 AM','7:25','7:29','7:34','7:41','7:45'],
            ['7:52 AM','7:55','7:59','8:04','8:11','8:15'],
            ['8:22 AM','8:25','8:29','8:34','8:41','8:45'],
            ['8:52 AM','8:55','8:59','9:04','9:11','9:15'],
            ['9:32 AM','9:35','9:39','9:44','9:51','9:55'],
            ['10:02 AM','10:05','10:09','10:14','10:21','10:25'],
            ['10:32 AM','10:35','10:39','10:44','10:51','10:55'],
            ['11:02 AM','11:05','11:09','11:14','11:21','11:25'],
            ['11:32 AM','11:35','11:39','11:44','11:51','11:55'],
            ['12:12 PM','12:15','12:19','12:24','12:31','12:35'],
            ['12:42 PM','12:45','12:49','12:54','1:01','1:05'],
            ['1:12 PM','1:15','1:19','1:24','1:31','1:35'],
            ['1:42 PM','1:45','1:49','1:54','2:01','2:05'],
            ['2:12 PM','2:15','2:19','2:24','2:31','2:35'],
            ['2:42 PM','2:45','2:49','2:54','3:01','3:05'],
            ['3:12 PM','3:15','3:19','3:24','3:31','3:35'],
            ['3:50 PM','3:53','3:57','4:02','4:09','4:13'],
            ['4:20 PM','4:23','4:27','4:32','4:39','4:43'],
            ['4:50 PM','4:53','4:57','5:02','5:09','5:13'],
            ['5:35 PM','5:38','5:42','5:47','5:54','5:58'],
            ['6:05 PM','6:08','6:12','6:17','6:24','6:28'],
            ['6:35 PM','6:38','6:42','6:47','6:54','6:58'],
            ['7:05 PM','7:08','7:12','7:17','7:24','7:28'],
            ['7:35 PM','7:38','7:42','7:47','7:54','7:58'],
            ['8:05 PM','8:08','8:12','8:17','8:24','8:28'],
            ['8:35 PM','8:38','8:42','8:47','8:54','8:58'],
            ['9:05 PM','9:08','9:12','9:17','9:24','9:28'],
            ['9:20 PM','9:23','9:27','9:32','9:39','9:43'],
            ['9:50 PM','9:53','9:57','10:03','10:09','10:13'],
          ],
        },
        {
          day: 'Saturday',
          stops: ['A', 'B', 'C', 'D', '5a', '5b'],
          times: [
            ['8:00 AM','8:03','8:07','8:12','8:19','8:23'],
            ['12:00 PM','12:03','12:07','12:12','12:19','12:23'],
            ['2:15 PM','2:18','2:22','2:27','2:34','2:38'],
            ['3:45 PM','3:48','3:52','3:57','4:04','4:08'],
            ['5:30 PM','5:33','5:37','5:42','5:49','5:53'],
            ['6:30 PM','6:33','6:37','6:42','6:49','6:53'],
          ]
        },
      ],
    },
    {
      routeId: '15',
      days: [
        {
          day: 'Monday to Friday',
          stops: ['A', '4a', 'B', '4b', 'C', 'D'],
          times: [
            ['5:22 AM','5:29','5:32','5:36','5:41','5:50'],
            ['5:52 AM','5:59','6:02','6:06','6:11','6:20'],
            ['6:22 AM','6:29','6:32','6:36','6:41','6:50'],
            ['6:40 AM','6:47','6:50','6:54','6:59','7:08'],
            ['6:52 AM','6:59','7:02','7:06','7:11','7:20'],
            ['7:22 AM','7:29','7:32','7:36','7:41','7:50'],
            ['7:52 AM','7:59','8:02','8:06','8:11','8:20'],
            ['8:22 AM','8:29','8:32','8:36','8:41','8:50'],
            ['8:32 AM','8:39','8:42','8:46','8:51','9:00'],
            ['8:52 AM','8:59','9:02','9:06','9:11','9:20'],
            ['9:22 AM','9:29','9:32','9:36','9:41','9:50'],
            ['9:52 AM','9:59','10:02','10:06','10:11','10:20'],
            ['10:22 AM','10:29','10:32','10:36','10:41','10:50'],
            ['10:52 AM','10:59','11:02','11:06','11:11','11:20'],
            ['11:22 AM','11:29','11:32','11:36','11:41','11:50'],
            ['11:32 AM','11:39','11:42','11:46','11:51','12:00'],
            ['12:12 PM','12:19','12:22','12:26','12:31','12:40'],
            ['12:42 PM','12:49','12:52','12:56','1:01','1:10'],
            ['1:12 PM','1:19','1:22','1:26','1:31','1:40'],
            ['1:42 PM','1:49','1:52','1:56','2:01','2:10'],
            ['2:12 PM','2:19','2:22','2:26','2:31','2:40'],
            ['2:42 PM','2:49','2:52','2:56','3:01','3:10'],
            ['3:12 PM','3:19','3:22','3:26','3:31','3:40'],
            ['3:50 PM','3:57','4:00','4:04','4:09','4:18'],
            ['4:20 PM','4:27','4:30','4:34','4:39','4:48'],
            ['4:50 PM','4:57','5:00','5:04','5:09','5:18'],
            ['5:20 PM','5:27','5:30','5:34','5:39','5:48'],
            ['5:50 PM','5:57','6:00','6:04','6:09','6:18'],
            ['6:20 PM','6:27','6:30','6:34','6:39','6:48'],
            ['6:35 PM','6:42','6:45','6:49','6:54','7:03'],
            ['7:05 PM','7:12','7:15','7:19','7:24','7:33'],
            ['7:35 PM','7:42','7:45','7:49','7:54','8:03'],
            ['8:05 PM','8:12','8:15','8:19','8:24','8:33'],
            ['8:35 PM','8:42','8:45','8:49','8:54','9:03'],
            ['9:05 PM','9:12','9:15','9:19','9:24','9:33'],
            ['9:20 PM','9:27','9:30','9:34','9:39','9:48'],
            ['9:50 PM','9:57','10:00','10:04','10:09','10:18'],
          ]
        },
        {
          day: 'Saturday',
          stops: ['A', '4a', 'B', '4b', 'C', 'D'],
          times: [
            ['7:30 AM','7:37','7:40','7:44','7:49','7:58'],
            ['12:00 PM','12:07','12:10','12:14','12:19','12:28'],
            ['3:45 PM','3:52','3:55','3:59','4:04','4:13'],
            ['4:30 PM','4:37','4:40','4:44','4:49','4:58'],
            ['7:00 PM','7:07','7:10','7:14','7:19','7:28'],
          ]
        },
      ],
    },
  ]
]; 