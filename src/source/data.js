// Returns fake data to mock api job.
export const getData = () => {
    return [
        {
            id: 1,
            image: 'https://blockgenius.io/cdn/shop/files/Group1091.png?v=1698871165&width=500',
            name: 'Bitmain Antminer L7 9050MH/s',
            specifications: {
                hashtrade: '103 TH/s',
                algorithm: 'SHA-256',
                coins: 'BTC/BCH/BSV'
            },
            promotion: {
                discount: 60,
                hit: true
            },
            prices: {
                price: 203000,
                discount: 13000
            }
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyLU30ZC3pu12nQlbF9T7SeHCxNIvKuM5LbHnuRclmw&s',
            name: 'Bitmain Antminer S19K PRO 120 TH/s',
            specifications: {
                hashtrade: '130 TH/s',
                algorithm: 'Scrypt',
                coins: 'BTC/BCH/BSV'
            },
            promotion: {
                new: true,
                hit: true,
            },
            prices: {
                price: 210000,
                discount: 18000
            }
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-hczmW5ijyq5Ob9dMIr5bo4nGRiqQvxYdQ&s',
            name: 'Bitmain Antminer S19 XP 141',
            specifications: {
                hashtrade: '107 TH/s',
                algorithm: 'SHA-256',
                coins: 'BTC/BCH/BSV'
            },
            promotion: {
                new: true,
            },
            prices: {
                price: 190000,
                discount: 8000
            }
        },
        {
            id: 4,
            image: 'https://www.viperatech.com/wp-content/uploads/2021/11/vl49nbievkrgipo2l0m6.png',
            name: 'Bitmain Antminer S19 XP 141 TH/s',
            specifications: {
                hashtrade: '98 TH/s',
                algorithm: 'Scrypt',
                coins: 'BTC/BCH/BSV'
            },
            promotion: {
                discount: 60,
            },
            prices: {
                price: 205000,
                discount: 13000
            }
        }
    ]
}