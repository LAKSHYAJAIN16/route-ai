import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>route.ai</Text>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name="bus" size={90} color="#8e24aa" />
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginPrompt}>Already have an account?</Text>

    </View>
  );
}

function SignUpScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const isPasswordValid = password.length > 0;
  const isConfirmValid = confirmPassword === password && password.length > 0;

  const handleNext = () => {
    navigation.navigate('AccountSetup', {
      email, phone, password, confirmPassword
    });
  };

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <ScrollView contentContainerStyle={styles.signupContainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.signupLogo}>route.ai</Text>
            <MaterialCommunityIcons name="bus" size={28} color="#8e24aa" style={{ marginLeft: 6 }} />
          </View>
          <Text style={styles.signupWelcome}>WELCOME!</Text>
        </View>
        <View style={styles.signupFieldGroup}>
          <Text style={styles.signupLabel}>Email</Text>
          <TextInput
            style={styles.signupInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your email (optional)"
            placeholderTextColor="#bbb"
          />
        </View>
        <View style={styles.signupFieldGroup}>
          <Text style={styles.signupLabel}>Phone Number</Text>
          <TextInput
            style={styles.signupInput}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter your phone (optional)"
            placeholderTextColor="#bbb"
          />
        </View>
        <View style={styles.signupFieldGroup}>
          <Text style={styles.signupLabel}>Password</Text>
          <TextInput
            style={styles.signupInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Create a password (optional)"
            placeholderTextColor="#bbb"
          />
        </View>
        <View style={styles.signupFieldGroup}>
          <Text style={styles.signupLabel}>Confirm Password</Text>
          <TextInput
            style={styles.signupInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Confirm password (optional)"
            placeholderTextColor="#bbb"
          />
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={handleNext} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>NEXT</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.signupRequired}>*Only Terms and Conditions are required</Text>
      </ScrollView>
    </LinearGradient>
  );
}

function AccountSetupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');

  const handleNext = () => {
    navigation.navigate('Personalization', {
      firstName, middleName, lastName, month, day, year, address1, address2, address3
    });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);
  const years = Array.from({ length: 100 }, (_, i) => `${2024 - i}`);

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <ScrollView contentContainerStyle={styles.accountSetupContainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.signupLogo}>route.ai</Text>
            <MaterialCommunityIcons name="bus" size={28} color="#8e24aa" style={{ marginLeft: 6 }} />
          </View>
          <Text style={styles.signupWelcome}>WELCOME!</Text>
          <View style={styles.accountSetupBadge}><Text style={styles.accountSetupBadgeText}>Account Setup</Text></View>
        </View>
        <Text style={styles.accountSetupSection}>Personal Info</Text>
        <Text style={styles.accountSetupSubSection}>Name</Text>
        <View style={styles.accountSetupNameRow}>
          <View style={styles.accountSetupNameField}>
            <Text style={styles.accountSetupLabel}>First Name<Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput style={styles.accountSetupInput} value={firstName} onChangeText={setFirstName} />
          </View>
          <View style={styles.accountSetupNameField}>
            <Text style={styles.accountSetupLabel}>Middle Name</Text>
            <TextInput style={styles.accountSetupInput} value={middleName} onChangeText={setMiddleName} />
          </View>
          <View style={styles.accountSetupNameField}>
            <Text style={styles.accountSetupLabel}>Last Name<Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput style={styles.accountSetupInput} value={lastName} onChangeText={setLastName} />
          </View>
        </View>
        <Text style={styles.accountSetupSubSection}>Date of Birth<Text style={{ color: 'red' }}>*</Text></Text>
        <View style={styles.accountSetupDOBRow}>
          <View style={styles.accountSetupDOBField}>
            <Text style={styles.accountSetupLabel}>Month</Text>
            <View style={styles.accountSetupDropdownPicker}>
              <Picker
                selectedValue={month}
                onValueChange={setMonth}
                style={{ flex: 1 }}
              >
                <Picker.Item label="Month" value="" />
                {months.map(m => <Picker.Item key={m} label={m} value={m} />)}
              </Picker>
            </View>
          </View>
          <View style={styles.accountSetupDOBField}>
            <Text style={styles.accountSetupLabel}>Day</Text>
            <View style={styles.accountSetupDropdownPicker}>
              <Picker
                selectedValue={day}
                onValueChange={setDay}
                style={{ flex: 1 }}
              >
                <Picker.Item label="Day" value="" />
                {days.map(d => <Picker.Item key={d} label={d} value={d} />)}
              </Picker>
            </View>
          </View>
          <View style={styles.accountSetupDOBField}>
            <Text style={styles.accountSetupLabel}>Year</Text>
            <View style={styles.accountSetupDropdownPicker}>
              <Picker
                selectedValue={year}
                onValueChange={setYear}
                style={{ flex: 1 }}
              >
                <Picker.Item label="Year" value="" />
                {years.map(y => <Picker.Item key={y} label={y} value={y} />)}
              </Picker>
            </View>
          </View>
        </View>
        <Text style={styles.accountSetupSubSection}>Location</Text>
        <Text style={styles.accountSetupLabel}>Address Line 1</Text>
        <TextInput style={styles.accountSetupInput} value={address1} onChangeText={setAddress1} />
        <Text style={styles.accountSetupLabel}>Address Line 2</Text>
        <TextInput style={styles.accountSetupInput} value={address2} onChangeText={setAddress2} />
        <Text style={styles.accountSetupLabel}>Address Line 3</Text>
        <TextInput style={styles.accountSetupInput} value={address3} onChangeText={setAddress3} />
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={handleNext} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>NEXT</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.signupRequired}>*REQUIRED</Text>
      </ScrollView>
    </LinearGradient>
  );
}

function PersonalizationScreen({ route, navigation }) {
  const [position, setPosition] = useState('');
  const [fare, setFare] = useState('');
  const [frequency, setFrequency] = useState('');
  const [priority, setPriority] = useState('');

  // Example dropdown options
  const positions = ['Student', 'Worker', 'Retired', 'Other'];
  const frequencies = ['Daily', '2-3x a week', 'Weekly', 'Rarely'];

  // All previous data is in route.params
  const collectedData = { ...route.params, position, fare, frequency, priority };

  const handleNext = () => {
    navigation.navigate('DataCollection', collectedData);
  };

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <ScrollView contentContainerStyle={styles.personalizationContainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.signupLogo}>route.ai</Text>
            <MaterialCommunityIcons name="bus" size={28} color="#8e24aa" style={{ marginLeft: 6 }} />
          </View>
          <Text style={styles.signupWelcome}>WELCOME!</Text>
          <View style={styles.accountSetupBadge}><Text style={styles.accountSetupBadgeText}>Personalization</Text></View>
        </View>
        <Text style={styles.personalizationDesc}>Take a quick survey to personalize your experience and optimize our data collection</Text>
        <Text style={styles.accountSetupSubSection}>Current Position</Text>
        <View style={styles.accountSetupDropdownPicker}>
          <Picker
            selectedValue={position}
            onValueChange={setPosition}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Select position" value="" />
            {positions.map(p => <Picker.Item key={p} label={p} value={p} />)}
          </Picker>
        </View>
        <Text style={styles.accountSetupSubSection}>What is your preferred fare price?</Text>
        <TextInput style={styles.accountSetupInput} value={fare} onChangeText={setFare} />
        <Text style={styles.accountSetupSubSection}>How often do you take public transportation?</Text>
        <View style={styles.accountSetupDropdownPicker}>
          <Picker
            selectedValue={frequency}
            onValueChange={setFrequency}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Select frequency" value="" />
            {frequencies.map(f => <Picker.Item key={f} label={f} value={f} />)}
          </Picker>
        </View>
        <Text style={styles.accountSetupSubSection}>What do you prioritize the most when considering transit features?</Text>
        <TextInput style={styles.accountSetupInput} value={priority} onChangeText={setPriority} />
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={handleNext} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>NEXT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function DataCollectionScreen({ route, navigation }) {
  const [routesTaken, setRoutesTaken] = useState(true);
  const [habits, setHabits] = useState(true);
  const [voice, setVoice] = useState(false);
  const [survey, setSurvey] = useState(false);
  const [arrival, setArrival] = useState(true);
  const [distance, setDistance] = useState(true);
  const [agreed, setAgreed] = useState(false);

  // All previous data is in route.params
  const collectedData = { ...route.params, routesTaken, habits, voice, survey, arrival, distance, agreed };

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <ScrollView contentContainerStyle={styles.dataCollectionContainer} keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.signupLogo}>route.ai</Text>
            <MaterialCommunityIcons name="bus" size={28} color="#8e24aa" style={{ marginLeft: 6 }} />
          </View>
          <Text style={styles.dataCollectionTitle}>Data Collection</Text>
        </View>
        <Text style={styles.dataCollectionDesc}>Select what kind of data you are okay with sharing:
          <Text style={{ color: '#888', fontSize: 13 }}>
            {'\n'}(This data will not be shared with anyone)
          </Text>
        </Text>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={routesTaken} onPress={() => setRoutesTaken(!routesTaken)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>Information on routes taken</Text>
        </View>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={habits} onPress={() => setHabits(!habits)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>Information on daily transportation habits</Text>
        </View>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={voice} onPress={() => setVoice(!voice)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>Voice recordings during select routes</Text>
        </View>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={survey} onPress={() => setSurvey(!survey)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>I consent to regular survey requests</Text>
        </View>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={arrival} onPress={() => setArrival(!arrival)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>Information on arrival and departing times</Text>
        </View>
        <View style={styles.dataCollectionOptionRow}>
          <CheckBox checked={distance} onPress={() => setDistance(!distance)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionOptionText}>Information on distance travelled</Text>
        </View>
        <View style={[styles.dataCollectionOptionRow, { marginTop: 16, alignItems: 'center' }]}>
          <CheckBox checked={agreed} onPress={() => setAgreed(!agreed)} checkedColor="#ff5f6d" containerStyle={styles.dataCollectionCheckBox} />
          <Text style={styles.dataCollectionTermsText}>I have read and agreed to the Terms and Conditions <Text style={{ color: 'red' }}>(Required)</Text></Text>
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} disabled={!agreed} onPress={() => {
          if (agreed) navigation.navigate('WelcomeHome');
        }} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={[styles.signupNextText, { opacity: agreed ? 1 : 0.5 }]}>Proceed</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function WelcomeHomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.welcomeHomeContainer}>
        <Text style={styles.welcomeHomeTitle}>Welcome to Route.AI</Text>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('DestinationInput')} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>Navigate to your next destination</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

function DestinationInputScreen({ navigation }) {
  const [destination, setDestination] = useState('');
  const destinations = ['40 Cornell Street, near bus terminal, Ontario Canada'];

  useEffect(() => {
    if (destination) {
      navigation.navigate('NextStep', { destination });
    }
  }, [destination]);

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.destinationInputContainer}>
        <Text style={styles.destinationInputTitle}>Where do you want to go?</Text>
        <View style={styles.accountSetupDropdownPicker}>
          <Picker
            selectedValue={destination}
            onValueChange={setDestination}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Select destination" value="" />
            {destinations.map(d => <Picker.Item key={d} label={d} value={d} />)}
          </Picker>
        </View>
        <Text style={styles.demoNote}>
          this is a demo, so there's only one preloaded destination - the real version would look different!
        </Text>
      </View>
    </LinearGradient>
  );
}

function NextStepScreen({ route, navigation }) {
  // Static data for demo
  const busInfo = [
    {
      number: '40',
      route: 'To Cornell Bus Terminal',
      arrivesIn: '12 min',
      eta: '18 Min',
      status: 'On Time!',
      color: '#12c06a',
      late: false,
    },
    {
      number: '129',
      route: '',
      arrivesIn: '9 min',
      eta: '9 Min',
      status: 'Late',
      color: '#e53935',
      late: true,
    },
  ];

  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.nextStepContainer}>
        {/* Static map image placeholder */}
        <View style={styles.mapContainer}>
          <View style={styles.mapImagePlaceholder}>
            {/* You can replace this with an actual map or image if desired */}
          </View>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.busInfoCard}
          >
            <MaterialCommunityIcons name="bus" size={36} color="#fff" style={{ marginRight: 10 }} />
            <Text style={styles.busInfoCardText} numberOfLines={1}>40 - To Cornell Bus Ter...</Text>
          </LinearGradient>
        </View>
        <View style={styles.busInfoGrid}>
          {/* First bus row */}
          <View style={styles.busInfoRow}>
            <View style={styles.busInfoCell}>
              <MaterialCommunityIcons name="bus" size={32} color="#1976d2" />
              <Text style={styles.busNumberBlue}>40</Text>
              <TouchableOpacity style={styles.chooseRouteButton} onPress={() => navigation.navigate('BusRoute', { number: '40', route: 'To Cornell Bus Terminal' })}>
                <Text style={styles.chooseRouteButtonText}>Choose Route</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.busInfoCell}>
              <Text style={styles.busArrivesLabel}>Arrives in</Text>
              <Text style={styles.busArrivesTimeGreen}>12 min</Text>
              <Text style={styles.busStatusOnTime}>On Time!</Text>
            </View>
            <View style={styles.busInfoCell}>
              <Text style={styles.busEtaLabel}>ETA</Text>
              <Text style={styles.busEtaTimeGreen}>18 Min</Text>
              <Text style={styles.busStatusOnTime}>On Time!</Text>
            </View>
          </View>
          {/* Second bus row */}
          <View style={styles.busInfoRow}>
            <View style={styles.busInfoCell}>
              <MaterialCommunityIcons name="bus" size={32} color="#e53935" />
              <Text style={styles.busNumberRed}>129</Text>
              <TouchableOpacity style={styles.chooseRouteButton} onPress={() => navigation.navigate('BusRoute', { number: '129', route: '' })}>
                <Text style={styles.chooseRouteButtonText}>Choose Route</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.busInfoCell}>
              <Text style={styles.busArrivesLabel}>Arrives in</Text>
              <Text style={styles.busArrivesTimeRed}>9 min</Text>
              <Text style={styles.busStatusLate}>Late</Text>
            </View>
            <View style={styles.busInfoCell}>
              <Text style={styles.busEtaLabel}>ETA</Text>
              <Text style={styles.busEtaTimeRed}>9 Min</Text>
              <Text style={styles.busStatusLate}>Late</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

function BusRouteScreen({ route, navigation }) {
  const busTitle = route.params?.number ? `${route.params.number}${route.params.route ? ' - ' + route.params.route : ''}` : 'Bus Route';
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.busRouteContainer}>
        <Text style={styles.busRouteTitle}>{busTitle}</Text>
        <Text style={styles.busRouteHeading}>Start walking to bus stop!</Text>
        <View style={styles.busRouteMapBox}>
          <Text style={styles.busRouteMapText}>map here</Text>
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('WaitForBus', { busTitle })} activeOpacity={0.85}>
          <LinearGradient
            colors={["#12c06a", "#43e97b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>Reached Bus Stop</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

function WaitForBusScreen({ route, navigation }) {
  const busTitle = route.params?.busTitle || 'Bus Route';
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.busRouteContainer}>
        <Text style={styles.busRouteTitle}>{busTitle}</Text>
        <Text style={styles.busRouteHeading}>Wait for the bus. We know, it's boring, we're working on it.</Text>
        <View style={styles.busRouteMapBox}>
          {/* Bus route lines */}
          <View style={styles.busRouteLine} />
          <View style={[styles.busRouteLine, { top: 60, left: 60, width: 120, transform: [{ rotate: '20deg' }] }]} />
          <Text style={styles.busRouteMapText}>map here</Text>
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('EnjoyRide', { busTitle })} activeOpacity={0.85}>
          <LinearGradient
            colors={["#12c06a", "#43e97b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>Boarded bus</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

function EnjoyRideScreen({ route, navigation }) {
  const busTitle = route.params?.busTitle || 'Bus Route';
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.busRouteContainer}>
        <Text style={styles.busRouteTitle}>{busTitle}</Text>
        <Text style={styles.busRouteHeading}>enjoy your ride</Text>
        <View style={styles.busRouteMapBox}>
          {/* Bus route lines */}
          <View style={styles.busRouteLine} />
          <View style={[styles.busRouteLine, { top: 60, left: 60, width: 120, transform: [{ rotate: '20deg' }] }]} />
          <Text style={styles.busRouteMapText}>map here</Text>
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('Feedback')} activeOpacity={0.85}>
          <LinearGradient
            colors={["#12c06a", "#43e97b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>end trip</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

function FeedbackScreen({ navigation }) {
  const [route, setRoute] = useState('40 - Cornell Bus Terminal');
  const [access, setAccess] = useState(0);
  const [fare, setFare] = useState(0);
  const [wait, setWait] = useState(0);
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <ScrollView contentContainerStyle={styles.feedbackContainer}>
        <View style={styles.mapContainer}>
          <View style={styles.mapImagePlaceholder}>
            <MaterialCommunityIcons name="map-marker" size={40} color="#e53935" style={{ position: 'absolute', top: 60, left: '50%', marginLeft: -20 }} />
          </View>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.feedbackRouteSelect}
          >
            <Text style={styles.feedbackRouteSelectText}>Select Bus Route</Text>
          </LinearGradient>
          <View style={styles.feedbackDropdownBox}>
            <Picker
              selectedValue={route}
              onValueChange={setRoute}
              style={styles.feedbackDropdown}
              dropdownIconColor="#fff"
            >
              <Picker.Item label="40 - Cornell Bus Terminal" value="40 - Cornell Bus Terminal" />
            </Picker>
          </View>
        </View>
        <View style={styles.feedbackCard}>
          <Text style={styles.feedbackQuestion}>How accessible was this bus route?</Text>
          <View style={styles.feedbackOptionsRow}>
            {[1,2,3,4,5].map(n => (
              <TouchableOpacity key={n} style={[styles.feedbackOption, access === n && styles.feedbackOptionSelected]} onPress={() => setAccess(n)} activeOpacity={0.85}>
                <Text style={styles.feedbackOptionText}>{n}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.feedbackQuestion}>How was the fare at this route?</Text>
          <View style={styles.feedbackOptionsRow}>
            {[1,2,3,4,5].map(n => (
              <TouchableOpacity key={n} style={[styles.feedbackOption, fare === n && styles.feedbackOptionSelected]} onPress={() => setFare(n)} activeOpacity={0.85}>
                <Text style={styles.feedbackOptionText}>{n}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.feedbackQuestion}>How were the wait times at this route?</Text>
          <View style={styles.feedbackOptionsRow}>
            {[1,2,3,4,5].map(n => (
              <TouchableOpacity key={n} style={[styles.feedbackOption, wait === n && styles.feedbackOptionSelected]} onPress={() => setWait(n)} activeOpacity={0.85}>
                <Text style={styles.feedbackOptionText}>{n}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('TripData')} activeOpacity={0.85}>
          <LinearGradient
            colors={["#ff5f6d", "#ffc371"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

function TripDataScreen({ navigation }) {
  return (
    <LinearGradient colors={["#f3e7e9", "#e3eeff"]} style={styles.gradientBg}>
      <View style={styles.tripDataContainer}>
        <View style={styles.mapContainer}>
          <View style={styles.mapImagePlaceholder} />
          <View style={styles.tripDataHeader}><Text style={styles.tripDataHeaderText}>Your Trip Data</Text></View>
        </View>
        <View style={styles.tripDataCard}>
          <View style={styles.tripDataRow}><Text style={styles.tripDataLabel}>Time Waited</Text><Text style={styles.tripDataValueGreen}>23.2 min</Text></View>
          <View style={styles.tripDataRow}><Text style={styles.tripDataLabel}>Distance Walked</Text><Text style={styles.tripDataValueGreen}>1.6KM</Text></View>
          <View style={styles.tripDataRow}><Text style={styles.tripDataLabel}>Transfers Taken</Text><Text style={styles.tripDataValue}>2</Text></View>
          <View style={styles.tripDataRow}><Text style={styles.tripDataLabel}>Estimated Trip Time</Text><Text style={styles.tripDataValueBlue}>26 min</Text></View>
          <View style={styles.tripDataRow}><Text style={styles.tripDataLabel}>Total Trip Time</Text><Text style={styles.tripDataValueRed}>48 min</Text></View>
        </View>
        <LinearGradient
          colors={["#ff5f6d", "#ffc371"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.tripDataAnalysisBar}
        >
          <Text style={styles.tripDataAnalysisText}>Trip Analysis: Unsatisfactory 😕</Text>
        </LinearGradient>
        <TouchableOpacity style={[styles.signupNextButton, styles.jazzyButton]} onPress={() => navigation.navigate('WelcomeHome')} activeOpacity={0.85}>
          <LinearGradient
            colors={["#8e24aa", "#43e97b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupNextGradient}
          >
            <Text style={styles.signupNextText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
        <Stack.Screen name="Personalization" component={PersonalizationScreen} />
        <Stack.Screen name="DataCollection" component={DataCollectionScreen} />
        <Stack.Screen name="WelcomeHome" component={WelcomeHomeScreen} />
        <Stack.Screen name="DestinationInput" component={DestinationInputScreen} />
        <Stack.Screen name="NextStep" component={NextStepScreen} />
        <Stack.Screen name="BusRoute" component={BusRouteScreen} />
        <Stack.Screen name="WaitForBus" component={WaitForBusScreen} />
        <Stack.Screen name="EnjoyRide" component={EnjoyRideScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="TripData" component={TripDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 24,
  },
  iconCircle: {
    borderWidth: 3,
    borderColor: '#8e24aa',
    borderRadius: 100,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  signupButton: {
    backgroundColor: '#8e24aa',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 60,
    marginBottom: 32,
    width: '100%',
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loginPrompt: {
    color: '#8e24aa',
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  loginButton: {
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 60,
    width: '100%',
    alignItems: 'center',
    borderRadius: 16,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  // SignUp styles
  signupContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: 'stretch',
  },
  signupLogo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  signupWelcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginTop: 8,
    marginBottom: 18,
  },
  signupFieldGroup: {
    marginBottom: 18,
  },
  signupLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  signupInput: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  signupInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  signupNextButton: {
    borderRadius: 24,
    marginTop: 16,
    marginBottom: 8,
    overflow: 'hidden',
  },
  signupNextGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 24,
  },
  signupNextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: 40,
  },
  signupRequired: {
    color: '#8e24aa',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 2,
  },
  // AccountSetup styles
  accountSetupContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: 'stretch',
  },
  accountSetupBadge: {
    backgroundColor: '#8e24aa',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  accountSetupBadgeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountSetupSection: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 10,
  },
  accountSetupSubSection: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  accountSetupNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  accountSetupNameField: {
    flex: 1,
    marginHorizontal: 5,
  },
  accountSetupLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  accountSetupInput: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  accountSetupDOBRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  accountSetupDOBField: {
    flex: 1,
    marginHorizontal: 5,
  },
  accountSetupDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  accountSetupDropdownText: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },
  yesNoButton: {
    backgroundColor: '#8e24aa',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  yesNoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  personalizationDesc: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  personalizationContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: 'stretch',
  },
  accountSetupDropdownPicker: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 2,
    overflow: 'hidden',
  },
  // DataCollection styles
  dataCollectionContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
    alignItems: 'stretch',
  },
  dataCollectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginTop: 8,
    marginBottom: 18,
  },
  dataCollectionDesc: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  dataCollectionOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dataCollectionOptionText: {
    fontSize: 16,
    color: '#222',
    marginLeft: 8,
    flex: 1,
  },
  dataCollectionTermsText: {
    fontSize: 15,
    color: '#222',
    marginLeft: 8,
    flex: 1,
  },
  dataCollectionCheckBox: {
    padding: 0,
    margin: 0,
    marginRight: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  welcomeHomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  welcomeHomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 40,
    textAlign: 'center',
  },
  destinationInputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 60,
  },
  destinationInputTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 20,
    textAlign: 'center',
  },
  destinationInputBox: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  nextStepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  nextStepTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 20,
    textAlign: 'center',
  },
  nextStepSubtitle: {
    fontSize: 18,
    color: '#222',
    textAlign: 'center',
  },
  demoNote: {
    color: '#8e24aa',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  mapImagePlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#b2dfdb',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  busInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -28,
    marginBottom: 8,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
    minWidth: 220,
    elevation: 2,
  },
  busInfoCardText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    flexShrink: 1,
  },
  busInfoGrid: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 8,
    width: '100%',
    elevation: 2,
  },
  busInfoRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  busInfoCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  busNumberBlue: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busNumberRed: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busCellLabel: {
    color: '#888',
    fontSize: 13,
    marginTop: 2,
  },
  busArrivesLabel: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
  busArrivesTimeGreen: {
    color: '#12c06a',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busArrivesTimeRed: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busEtaLabel: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
  },
  busEtaTimeGreen: {
    color: '#12c06a',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busEtaTimeRed: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 2,
  },
  busStatusOnTime: {
    color: '#12c06a',
    fontSize: 13,
    fontWeight: 'bold',
  },
  busStatusLate: {
    color: '#e53935',
    fontSize: 13,
    fontWeight: 'bold',
  },
  busRouteContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  busRouteTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginTop: 32,
    marginBottom: 18,
    textAlign: 'center',
  },
  busRouteHeading: {
    fontSize: 20,
    color: '#222',
    marginBottom: 24,
    textAlign: 'center',
  },
  busRouteMapBox: {
    width: '100%',
    height: 200,
    backgroundColor: '#12c06a',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  busRouteLine: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 160,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
    opacity: 0.7,
  },
  busRouteMapText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  chooseRouteButton: {
    backgroundColor: '#8e24aa',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginTop: 6,
  },
  chooseRouteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  feedbackContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 0,
    alignItems: 'center',
  },
  feedbackRouteSelect: {
    alignSelf: 'center',
    marginTop: -24,
    marginBottom: 8,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 24,
    elevation: 2,
  },
  feedbackRouteSelectText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedbackDropdownBox: {
    backgroundColor: '#8e24aa',
    borderRadius: 16,
    marginBottom: 16,
    alignSelf: 'center',
    width: 260,
    overflow: 'hidden',
  },
  feedbackDropdown: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#8e24aa',
    width: '100%',
  },
  feedbackCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    padding: 18,
    margin: 12,
    width: 340,
    alignSelf: 'center',
    elevation: 2,
  },
  feedbackQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  feedbackOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  feedbackOption: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#8e24aa',
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  feedbackOptionSelected: {
    backgroundColor: '#8e24aa',
  },
  feedbackOptionText: {
    color: '#8e24aa',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tripDataContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 0,
  },
  tripDataHeader: {
    alignSelf: 'center',
    marginTop: -24,
    marginBottom: 8,
    borderRadius: 16,
    backgroundColor: '#8e24aa',
    paddingVertical: 6,
    paddingHorizontal: 24,
    elevation: 2,
  },
  tripDataHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tripDataCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    padding: 18,
    margin: 12,
    width: 280,
    alignSelf: 'center',
    elevation: 2,
  },
  tripDataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tripDataLabel: {
    color: '#8e24aa',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tripDataValue: {
    color: '#8e24aa',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tripDataValueGreen: {
    color: '#12c06a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tripDataValueBlue: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tripDataValueRed: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tripDataAnalysisBar: {
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    elevation: 2,
  },
  tripDataAnalysisText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  gradientBg: {
    flex: 1,
  },
  jazzyButton: {
    shadowColor: '#8e24aa',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});
