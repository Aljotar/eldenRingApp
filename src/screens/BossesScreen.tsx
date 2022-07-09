import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'BossesSreen'> { };


export const BossesSreen = ({ navigation, route }: Props) => {

    const { BossData } = route.params;

    const { name, image, description, location, drops, healthPoints } = BossData;


    return (
        <>
            <View>
                <Text style={styles.bossName}>
                    {name}
                </Text>
                <FadeInImage
                    uri={image}
                    style={styles.bossImage}

                />
                <Text style={styles.bossDescription}>{description}</Text>
            </View>


            <View style={styles.bossBody}>
                <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: "500", padding: 20 }}>INFORMATION</Text>
                <View style={{ left: 20 }}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='heart-outline' size={25} color={'white'} /><Text style={styles.bossStats}>HP:  {healthPoints}</Text>
                    </View>
                    <View style={styles.dropBoss}>
                        <Icon name='location-outline' size={25} color={'white'} /><Text style={styles.bossStats}>LOCATION:  " {location} "</Text>
                    </View>
                    <View style={styles.dropBoss}>
                        <Icon name='gift-outline' size={25} color={'white'} /><Text style={styles.bossStats}>DROPS: {drops}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bossName: {
        color: '#F8F8F8',
        fontSize: 20,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: 100,
        left: 200,
        fontWeight: '500',
    },
    bossImage: {
        width: 150,
        height: 230,
        borderRadius: 10,
        margin: 10
    },
    bossDescription: {
        color: '#E9E9E9',
        fontSize: 15,
        textAlign: 'center',
    },
    bossBody: {
        width: 380,
        backgroundColor: '#151515',
        alignSelf: 'center',
        marginTop: 30,
        shadowColor: "#3A3A3A",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 2,
        paddingBottom: 50
    },
    bossStats: {
        color: 'white',
        marginLeft: 15,
        fontWeight: '500',
        top: 3
    },
    dropBoss: {
        flexDirection: 'row', 
        marginTop: 15,
        top: 3,
    }
})