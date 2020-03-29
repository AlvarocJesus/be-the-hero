import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'; 

import logoImg from '../../assets/logo.png';

import styles from './styles.js';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            seubject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}text=${message}`);
    }

    return (
        <View styles={style.container} >
            <View style={style.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arroe-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

                <View style={styles.incidents}>
                    <Text style={[styles.incidentsPropety, { marginTop: 0 }]}>ONG:</Text>
                    <Text style={styles.incidentsvalue}>{incident.name} de {incident.cidade}/{incident.uf}</Text>

                    <Text style={styles.incidentsPropety}>Caso:</Text>
                    <Text style={styles.incidentsvalue}>{incident.title}</Text>

                    <Text style={styles.incidentsPropety}>Valor:</Text>
                    <Text style={styles.incidentsvalue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency', 
                            currency: 'BRL'
                        }).format(incident.value)}</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.actions} onPress={sendWhatsapp}>
                           <Text style={styles.actionsText}> Whatsapp </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actions} onPress={sendEmail}>
                        <Text style={styles.actionsText}> E-mail </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

        </View>
    );
}