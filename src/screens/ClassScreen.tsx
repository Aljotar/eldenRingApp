import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'ClassScreen'> { };

export const ClassScreen = ({ navigation, route }: Props) => {

    const { ClassData } = route.params

    const { name, image, stats, description } = ClassData;


    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.className}>
                    {name}
                </Text>
                <FadeInImage
                    uri={image}
                    style={styles.classImage}

                />
                <Text style={styles.classDescription}>{description}</Text>
            </View>


            <View style={styles.classBody}>
                <Text style={{ fontSize: 25, color: '#FFFFFF', fontWeight: "500", padding: 20 }}>Stats</Text>
                <View style={{position:'absolute', top: 60, left: 85}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='body-outline' size={25} color={'white'} /><Text style={styles.classStats}>LEVEL:  {stats.level} </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='heart-outline' size={25} color={'white'} /><Text style={styles.classStats}>VIGOR:  {stats.vigor}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='analytics-outline' size={25} color={'white'} /><Text style={styles.classStats}>MIND:  {stats.mind}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='bicycle-outline' size={25} color={'white'} /><Text style={styles.classStats}>ENDURNCE:  {stats.endurance}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='barbell-outline' size={25} color={'white'} /><Text style={styles.classStats}>STRENGTH:  {stats.strength}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='american-football-outline' size={25} color={'white'} /><Text style={styles.classStats}>DEXTERITY:  {stats.dexterity}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='school-outline' size={25} color={'white'} /><Text style={styles.classStats}>INTELIGENCE:  {stats.intelligence}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='hand-left-outline' size={25} color={'white'} /><Text style={styles.classStats}>FAITH:  {stats.faith}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Icon name='color-wand-outline' size={25} color={'white'} /><Text style={styles.classStats}>ARCANE: { stats.arcane}</Text>
                    </View>

                </View>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 301,
    },
    className: {
        color: '#F8F8F8',
        fontSize: 40,
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: 100,
        left: 200,
        fontWeight: '500',
    },
    classImage: {
        width: 150,
        height: 250,
        top: 10
    },
    classDescription: {
        color: '#E9E9E9',
        fontSize: 15,
        textAlign: 'center',
        top: 25
    },
    classBody: {
        width: 380,
        height: 400,
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
    },
    classStats: {
        color: 'white',
        marginLeft: 25,
        fontWeight: '500'
    }
})
