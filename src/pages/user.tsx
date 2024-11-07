type UserProps = {
    userName: string,
    userEmail: string,
    userPhone: string,
}

function User({ userName, userEmail, userPhone }: UserProps) {
    return (
        <div>
            <p>
                Name: {userName} | Email: {userEmail} | Phone: {userPhone}
            </p>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const response = await fetch("https://672b69e51600dda5a9f4e7ea.mockapi.io/api/next-trials/users/1");
        const userData = await response.json();
        
        return {
            props: {
                userName: userData.name,
                userEmail: userData.email,
                userPhone: userData.phone,
            },
        };
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
}

export default User;
