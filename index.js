const users = [
    {
        firstName: "Abdi Dwi",
        lastName: "Ramdani",
        dateOfBirth: "2001 12 14",
        address: [
            {
                street: "Jl. Perumnas No.3",
                ward: "Condongcatur",
                subDistrict: "Depok",
                city: "Sleman",
                province: "D.I. Yogyakarta",
                postalCode: "55281"
            },
            {
                street: "Jl. Sambongjaya No. 64",
                ward: "Sambongjaya",
                subDistrict: "Mangkubumi",
                city: "Tasikmalaya",
                province: "Jawa Barat",
                postalCode: "46181"
            },
            {
                street: "Jl. Lintas Penghubung",
                ward: "Kotasari",
                subDistrict: "Gerogol",
                city: "Cilegon",
                province: "Banten",
                postalCode: "46182"
            }
        ]
    },
    {
        firstName: "Rina",
        lastName: "Wijaya",
        dateOfBirth: "1995 05 20",
        address: [
            {
                street: "Jl. Cendrawasih No. 8",
                ward: "Sukajadi",
                subDistrict: "Cibiru",
                city: "Bandung",
                province: "Jawa Barat",
                postalCode: "40125"
            }
        ]
    },
    {
        firstName: "Ahmad",
        lastName: "Hadi",
        dateOfBirth: "1988 09 03",
        address: [
            {
                street: "Jl. Mawar No. 15, Mulyaharja, Kec. Cisarua",
                ward: "Mulyaharja",
                subDistrict: "Cisarua",
                city: "Bogor",
                province: "Jawa Barat",
                postalCode: "16750"
            },
            {
                street: "Jl. Jambu No. 22",
                ward: "Sukasari",
                subDistrict: "Regol",
                city: "Bandung",
                province: "Jawa Barat",
                postalCode: "40254"
            }
        ]
    },
    {
        firstName: "Siti",
        lastName: "Nuraini",
        dateOfBirth: "1990 03 10",
        address: [
            {
                street: "Jl. Puspa No. 7",
                ward: "Puspasari",
                subDistrict: "Bogor Selatan",
                city: "Bogor",
                province: "Jawa Barat",
                postalCode: "16146"
            },
            {
                street: "Jl. Kenanga",
                ward: "Cigantang",
                subDistrict: "Mangkubumi",
                city: "Tasikmalaya",
                province: "Jawa Barat",
                postalCode: "46156"
            }
        ]
    },
    {
        firstName: "Dewi",
        lastName: "Sartika",
        dateOfBirth: "1993 08 25",
        address: [
            {
                street: "Jl. Teratai No. 18, Teratai Indah, Kec. Bogor Utara",
                ward: "Teratai Indah",
                subDistrict: "Bogor Utara",
                city: "Bogor",
                province: "Jawa Barat",
                postalCode: "16161"
            },
            {
                street: "Jl. Flamboyan",
                ward: "Purwosari",
                subDistrict: "Laweyan",
                city: "Surakarta",
                province: "Jawa Tengah",
                postalCode: "57139"
            }
        ]
    },
    {
        firstName: "Budi",
        lastName: "Santoso",
        dateOfBirth: "1985 04 03",
        address: [
            {
                street: "Jl. Cendrawasih",
                ward: "Sukun",
                subDistrict: "Sukun",
                city: "Malang",
                province: "Jawa Timur",
                postalCode: "65142"
            }
        ]
    },
    {
        firstName: "Siti",
        lastName: "Nusyah",
        dateOfBirth: "1997 11 17",
        address: [
            {
                street: "Jl. Kenari",
                ward: "Lingkungan Payaman",
                subDistrict: "Giri",
                city: "Banyuwangi",
                province: "Jawa Timur",
                postalCode: "68414"
            },
            {
                street: "Jl. Anggrek No. 8",
                ward: "Sritanjung",
                subDistrict: "Taman",
                city: "Sidoarjo",
                province: "Jawa Timur",
                postalCode: "61211"
            }
        ]
    },
    {
        firstName: "Rudi",
        lastName: "Wijaya",
        dateOfBirth: "1998 06 02",
        address: [
            {
                street: "Jl. Melati No. 10",
                ward: "Srondol Wetan",
                subDistrict: "Banyumanik",
                city: "Semarang",
                province: "Jawa Tengah",
                postalCode: "50243"
            }
        ]
    },
    {
        firstName: "Eka",
        lastName: "Saputra",
        dateOfBirth: "1990 03 12",
        address: [
            {
                street: "Jl. Delima",
                ward: "Jati Pulo",
                subDistrict: "Palmerah",
                city: "Jakarta",
                province: "DKI Jakarta",
                postalCode: "12345"
            }
        ]
    },
    {
        firstName: "Ani",
        lastName: "Wijaya",
        dateOfBirth: "1983 09 28",
        address: [
            {
                street: "Jl. Merdeka No. 14",
                ward: "Pulo Brayan Kota",
                subDistrict: "Medan Barat",
                city: "Medan",
                province: "Sumatera Utara",
                postalCode: "20234"
            },
            {
                street: "Jl. Raya Bukit Sejahtera",
                ward: "Karang Jaya",
                subDistrict: "Gandus",
                city: "Palembang",
                province: "Sumatera Selatan",
                postalCode: "30123"
            }
        ]
    },
];

function sortUsers(users, sortBy, order) {
    if (sortBy === 'dateOfBirth') {
        return users.slice().sort((a, b) => {
            const dateA = new Date(a.dateOfBirth.replace(/ /g, '-')).getTime(); // ganti spasi denga "-" biar format sesuai pas getTime() hasilnya berupa angka biar bisa di sort
            // console.log(dateA)
            const dateB = new Date(b.dateOfBirth.replace(/ /g, '-')).getTime();
            if (order === 'asc') {
                return dateA - dateB;
            } else if (order === 'dsc') {
                return dateB - dateA;
            } else {
                throw new Error('Invalid sorting order specified');
            }
        });
    } else if (sortBy === 'city') {
        if (order === 'asc') {
            //sort dulu address tiap users
            users.forEach(user => {
                user.address.sort((a, b) => a.province.toLowerCase().localeCompare(b.province.toLowerCase()));
                //simpan di object firstCity
                user.firstCity = user.address[0].province;
            });
            //Lanjut sort firstCity
            const sortedUsers = users.slice().sort((a, b) => {
                return a.firstCity.toLowerCase().localeCompare(b.firstCity.toLowerCase());
            });
            return sortedUsers;

        } else if (order === 'dsc') {
            users.forEach((user) => {
                user.address.sort((a, b) => b.city.toLowerCase().localeCompare(a.city.toLowerCase()));
                user.firstCity = user.address[0].city;
            });
            const sortedUsers = users.slice().sort((a, b) => {
                return b.firstCity.toLowerCase().localeCompare(a.firstCity.toLowerCase());
            });
            return sortedUsers;
        }
    } else {
        throw new Error("Invalid sort order. Please specify 'asc' or 'desc'.");
    }
}

// sortUsers(users, "city", "asc").forEach((user) => {
//     console.log(`${user.firstName} ${user.lastName}`);
//     user.address.forEach((address) => {
//         console.log(
//             `  ${address.street}, ${address.ward}, ${address.subDistrict}, ${address.city}, ${address.province} ${address.postalCode}`
//         );
//     });
//     console.log();
// });

// console.log(sortUsers(users, "dateOfBirth", "dsc"))

function findName(users, searchQuery) {
    const nameUsers = users.filter(user => {
        const fullName = user.firstName + user.lastName;
        return fullName.toLowerCase().replace(/\s+/g, '').includes(searchQuery.toLowerCase().replace(/\s+/g, ''));
    });

    const count = nameUsers.length;
    return {nameUsers, count};
}

// console.log(findName(users, "tinu"))

function filterUsersByAddressCount(users, addressCount) {
    return users.filter(user => user.address.length === addressCount);
}

const filteredUsers = filterUsersByAddressCount(users, 3);
filteredUsers.forEach(user => {
    console.log(`Name: ${user.firstName} ${user.lastName}`);
});