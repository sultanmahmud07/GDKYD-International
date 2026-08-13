import { BASEURL } from "@/Constant";

export default async function getBookingApi() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiQS0xMDMwIiwibmFtZSI6IkFyYWZhdCIsImlhdCI6MTcwNDA5MTg1NSwiZXhwIjoxNzA5Mjc1ODU1fQ.OhoVdsw2zw3iLhMkc5o8rSaNZ2vohQNYOyEuPPQrZZg"; // Replace with your actual token
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const result = await fetch(`${BASEURL}/user/booking/65bdda6aed124a98685b420c`, {
        headers,
    });

    return result.json();
}