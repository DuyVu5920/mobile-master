const url = 'https://static.vinwonders.com/production/bien-quy-nhon.jpg'

export const trips = [
    {
        id: 1,
        user_id: 1,
        name: 'Hà Nội - Phú Quốc',
        start_date: '1/1/2025',
        end_date: '3/1/2025',
        destination: 'Phu Quoc',
        duration: 3,
        total_cost: 4500000,
        status: 'upcoming',
        favoredByUser: true,
        total_member: 1,
        members: [1, 1, 1, 1, 1, 1, 1],
        flight: 1,
        hotel: 2,
        creation_date: '1/12/2024',
        plan: [
            {
                day_id: 1,
                travel_distance: '50km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 2,
                travel_distance: '60km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 3,
                travel_distance: '70km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        user_id: 2,
        name: 'Hà Nội - Đà Nẵng',
        start_date: '1/1/2025',
        end_date: '4/1/2025',
        destination: 'Da Nang',
        duration: 4,
        total_cost: 7000000,
        status: 'ongoing',
        favoredByUser: true,
        total_member: 2,
        creation_date: '4/12/2024',
        plan: [
            {
                day_id: 1,
                travel_distance: '50km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 2,
                travel_distance: '60km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 3,
                travel_distance: '70km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        user_id: 1,
        name: 'Hà Nội - Nha Trang',
        start_date: '15/4/2024',
        end_date: '18/4/2024',
        destination: 'Nha Trang',
        duration: 3,
        total_cost: 6000000,
        status: 'completed',
        favoredByUser: false,
        total_member: 3,
        creation_date: '7/12/2024',
        plan: [
            {
                day_id: 1,
                travel_distance: '50km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 2,
                travel_distance: '60km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 3,
                travel_distance: '70km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        user_id: 2,
        name: 'Hà Nội - Phú Quốc',
        start_date: '1/1/2025',
        end_date: '3/1/2025',
        destination: 'Phu Quoc',
        duration: 3,
        total_cost: 5000000,
        status: 'upcoming',
        favoredByUser: false,
        total_member: 4,
        creation_date: '1/12/2024',
        plan: [
            {
                day_id: 1,
                travel_distance: '50km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 2,
                travel_distance: '60km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 3,
                travel_distance: '70km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        user_id: 2,
        name: 'Hà Nội - Quy Nhon',
        start_date: '1/1/2025',
        end_date: '3/1/2025',
        destination: 'Quy Nhon',
        duration: 3,
        total_cost: 8700000,
        status: 'upcoming',
        favoredByUser: false,
        total_member: 5,
        creation_date: '1/12/2024',
        plan: [
            {
                day_id: 1,
                travel_distance: '50km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 2,
                travel_distance: '60km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            },
            {
                day_id: 3,
                travel_distance: '70km',
                places: [
                    {
                        place_id: 1,
                        place_name: 'Bãi biển',
                        place_image: url,
                    },
                    {
                        place_id: 2,
                        place_name: 'Bãi biển 2',
                        place_image: url,
                    },
                    {
                        place_id: 3,
                        place_name: 'Bãi biển 3',
                        place_image: url,
                    },
                ]
            }
        ]
    },
];


