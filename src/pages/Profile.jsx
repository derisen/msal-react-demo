import { ProfileData } from "../components/ProfileData";

export const Profile = () => {
    return (
        <>
            <ProfileData graphData={{
                displayName: 'Dummy Joe',
                jobTitle: 'Dummy Title',
                mail: 'dummy@mail.com',
                businessPhones: ['1234567890'],
                officeLocation: 'dummy address',
            }} />
        </>
    )
}