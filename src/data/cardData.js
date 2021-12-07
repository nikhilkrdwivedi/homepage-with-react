import InProgressIcon from '../assets/InProgressIcon.png';
import ReceivedIcon from '../assets/ReceivedIcon.png';
import RequestIcon from '../assets/RequestIcon.png';
export const cardData = {
    activity: [
        { total: 299, text: 'Quotes Requested', type: 'REQUESTED', imgUrl: `${RequestIcon}` },
        { total: 23, text: 'Quotes In-Progress', type: 'IN-PROGRESS', imgUrl: `${InProgressIcon}` },
        { total: 408, text: 'Quotes Received', type: 'RECEIVED', imgUrl: `${ReceivedIcon}` },
    ],
    quotes: [
        { text: 'Sport items Requested', type: 'REQUESTED' },
        { text: 'Postal Received', type: 'RECEIVED' },
        { text: 'Food delivery in-progress', type: 'IN-PROGRESS' },
        { text: 'Quotes Requested', type: 'REQUESTED' },
    ]
}