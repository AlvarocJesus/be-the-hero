import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddinTop: Constants.statusBarHeight + 20,

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItens: 'center',
    },
   
    incidents: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentsPropety: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentsvalue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },
    
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },
    
    heroDescription: {
        fonSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius:8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItens: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});