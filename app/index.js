import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import { useEffect, useState } from "react";
import QRGenerate from "../components/qr_generate/qr_generate";
import QRValidate from "../components/qr_validate/qr_validate";
const FirstRoute = () => (
    <QRGenerate/>
);

const SecondRoute = () => (
    <QRValidate/>
);
const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const Home = () => {

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Generate' },
        { key: 'second', title: 'Validate' },
      ]);

    const router = useRouter();

    useEffect(() => {
        console.log(index)
    }, [index]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:"#FAFAFC",flexDirection:"column"}}>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: "#FAFAFC"},
                headerShadowVisible: false,
                headerTitle: ""
            }}
            />
            {/*<View style={{backgroundColor:"#00FF00", flex:2}}>

            </View>
            <View style={{backgroundColor:"#0000FF", flex:2}}>

        </View> */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />

        </SafeAreaView>
    )
}

export default Home;