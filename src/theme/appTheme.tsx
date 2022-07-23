import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CardContainer: {
        backgroundColor: '#242424',
        marginHorizontal: 5,
        height: 100,
        marginBottom: 25,
        borderRadius: 10,
        flexDirection: 'row',

    },
    name: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        textAlignVertical: 'top'
        

    },
    Image: {
        width: 73,
        height: 100
    },
    classImage: {
        width: 75,
        height: 120,
        position: 'absolute',
        right: -3,
        bottom: -2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    weaponImage: {
            width: 80,
            height: 80,
            left: 3,
            marginTop: 5
    },
    listName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop: 10,
        color: 'white',
        alignSelf: 'center'
    }
});