import { GameType } from './dragAndDrop/types';

export const questions: GameType = [
    { 
        title: "Europe",
        question: "Which countries are located in Europe?",
        image: require('../assets/images/europe.jpg'),
        items: [
            {
                title: 'Paraguay'
            },
            {
                title: 'Norway',
                solution: {
                    image: require('../assets/images/norway.jpg'),
                    text: 'The Kingdom of Norway – located in northern Europe and well known for beautiful fjords and northern lights.'
                }
            },
            {
                title: 'Japan'
            },
            {
                title: 'Andorra',
                solution: {
                    image: require('../assets/images/andorra.jpg'),
                    text: 'A tiny country in the Pyrenees, located between France and Spain, populated by only 80,000 people.'
                }
            },
            {
                title: 'Bosnia and Herzegovina',
                solution: {
                    image: require('../assets/images/bosnia.jpg'),
                    text: 'Located between the Balkans and the Mediterranean Sea in south eastern Europe, Bosnia and Herzegovina attracks visitors with beautiful and diverse landscapes.'
                }
            },
            {
                title: 'Kasakhstan'
            },
            {
                title: 'Bulgaria',
                solution: {
                    image: require('../assets/images/bulgaria.jpg'),
                    text: 'Located in Southeast Europe and part of the European Union. Bulgaria has alpine mountains and the gold coast at the Black Sea.'
                }
            },
            {
                title: 'Marocco'
            }
        ]
    },
    { 
        title: "Asia",
        question: "Which world cultural heritage sites are located in Asia?",
        image: require('../assets/images/asia.jpg'),
        items: [
            {
                title: 'Taj Mahal',
                solution: {
                    image: require('../assets/images/taj-mahal.jpg'),
                    text: 'One of India\'s best known tourist attracktions: the Taj Mahal was built of white marble in the 17th century in central India.'
                }
            },
            {
                title: 'Ancient Pyramids'
            },
            {
                title: 'Angkor Wat',
                solution: {
                    image: require('../assets/images/angkor-wat.jpg'),
                    text: 'The huge temple complex is Cambodia in South East Asia is known as the largest religious structure in the world. It was built during the 12th century.'
                }
            },
            {
                title: 'Kremlin'
            },
            {
                title: 'Stonehenge'
            },
            {
                title: 'Machu Picchu'
            },
            {
                title: 'Bagan',
                solution: {
                    image: require('../assets/images/bagan.jpg'),
                    text: 'The ancient city of Bagan in southern Asia was the capital of the Bagan kingdom from the 9th to the 13th century and is located in Myanmar.'
                }
            }
        ]
    },
    { 
        title: "Africa",
        question: "Which capitals are located in Africa?",
        image: require('../assets/images/africa.jpg'),
        items: [
            {
                title: 'Dacca'
            },
            {
                title: 'Algiers',
                solution: {
                    image: require('../assets/images/algier.jpg'),
                    text: 'The capital of Algeria in Northern Africa, located at the Mediterranean Sea hosts a UNESCO World Heritage Site: the Casbah citadel.'
                }
            },
            {
                title: 'Riad'
            },
            {
                title: 'Dakar',
                solution: {
                    image: require('../assets/images/dakar.jpg'),
                    text: 'Dakar – the capital of the Westafrican state Senegal – should not be mistaken with Dacca, the capital of Bangladesh. Dakar is the destination for one of the world\'s most famous car races: the Rally Dakar.'
                }
            },
            {
                title: 'Ulan Baator'
            },
            {
                title: 'Montevideo'
            },
            {
                title: 'Lusaka',
                solution: {
                    image: require('../assets/images/sambia.jpg'),
                    text: 'Lusaka is the capital of the southern African state of Zambia – known for the impressive river Zambezi and the Victoria falls.'
                }
            }
        ]
    },
    { 
        title: "North America",
        question: "Which National Parks are located in North America?",
        image: require('../assets/images/north-america.jpg'),
        items: [
            {
                title: 'Yosemite National Park',
                solution: {
                    image: require('../assets/images/yosemite.jpg'),
                    text: 'Yosemite National Park is located in the western part of the United States, in the state of California. It is home to some of the world\'s tallest waterfalls, including the iconic Yosemite Falls, which drops a total of 739 meters.'
                }
            },
            {
                title: 'Cairngorms National Park'
            },
            {
                title: 'Lake District'
            },
            {
                title: 'Banff National Park',
                solution: {
                    image: require('../assets/images/banff.jpg'),
                    text: 'Banff National Park is Canada\'s oldest national park and is located in the province of Alberta. It is known for its breathtaking mountain scenery, turquoise-colored glacial lakes, and abundant wildlife, including grizzly bears, wolves, and elk.'
                }
            },
            {
                title: 'Palenque National Park',
                solution: {
                    image: require('../assets/images/palenque.jpg'),
                    text: 'Palenque National Park is a UNESCO World Heritage Site located in the southern Mexican state of Chiapas, known for its well-preserved Mayan ruins and temples that date back to the 7th century. '
                }
            },
            {
                title: 'Blue Mountains Natioanl Park'
            }
        ]
    },
    { 
        title: "Australia",
        question: "Which States are located in Australia?",
        image: require('../assets/images/australia.jpg'),
        items: [
            {
                title: 'New Mexico'
            },
            {
                title: 'Queensland',
                solution: {
                    image: require('../assets/images/queensland.jpg'),
                    text: 'Queensland is a state located in northeastern Australia, known for its beautiful beaches, tropical climate, and Great Barrier Reef, one of the world\'s largest coral reef systems.'
                }
            },
            {
                title: 'New South Wales',
                solution: {
                    image: require('../assets/images/new-south-wales.jpg'),
                    text: 'New South Wales is a state in southeastern Australia that is home to the vibrant city of Sydney, as well as stunning natural attractions such as the Blue Mountains and the beaches of the Central Coast.'
                }
            },
            {
                title: 'Alberta'
            },
            {
                title: 'Victoria',
                solution: {
                    image: require('../assets/images/victoria.jpg'),
                    text: 'Victoria is a state in southeastern Australia known for its diverse landscapes, including rugged coastline, mountain ranges, and vast inland plains, as well as the cultural city of Melbourne.'
                }
            },
            {
                title: 'Saxony'
            }
        ]
    },
    { 
        title: "South Amerika",
        question: "Which Rivers are located in South Amerika?",
        image: require('../assets/images/south-america.jpg'),
        items: [
            {
                title: 'Rio Negro',
                solution: {
                    image: require('../assets/images/rio-negro.jpg'),
                    text: 'Rio Negro is the largest left tributary of the Amazon River and is located in South America, flowing through Brazil, Colombia, and Venezuela, and is known for its dark waters and abundant wildlife, including pink river dolphins and piranhas.'
                }
            },
            {
                title: 'Yenisey'
            },
            {
                title: 'Tagus'
            },
            {
                title: 'Amazon',
                solution: {
                    image: require('../assets/images/amazon.jpg'),
                    text: 'The Amazon River is the largest river in the world by discharge volume, flowing through South America and playing a vital role in the region\'s ecology and economy.'
                }
            },
            {
                title: 'Orinoco',
                solution: {
                    image: require('../assets/images/orinoco.jpg'),
                    text: 'The Orinoco River is one of the longest rivers in South America, flowing through Venezuela and Colombia, and is home to a diverse range of flora and fauna, including over 1,000 species of fish.'
                }
            },
            {
                title: 'Sambesi'
            },
            {
                title: 'Nile'
            }
        ]
    },
    { 
        title: "Antarctica",
        question: "Which Seas are located in Antarctica?",
        image: require('../assets/images/antarctica.jpg'),
        items: [
            {
                title: 'Barents Sea'
            },
            {
                title: 'Bering Sea',
            },
            {
                title: 'Ross Sea',
                solution: {
                    image: require('../assets/images/ross.jpg'),
                    text: 'The Ross Sea is a deep bay located in the Southern Ocean off the coast of Antarctica, known for its pristine and largely untouched ecosystem, including unique species such as the Ross Sea orca and the Antarctic toothfish.',
                    attribution: 'By Francisco Ardini / ©PNRA, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=54336893'
                }
            },
            {
                title: 'Banda Sea'
            },
            {
                title: 'Weddell Sea',
                solution: {
                    image: require('../assets/images/weddell.jpg'),
                    text: 'The Weddell Sea is a vast bay in the Southern Ocean off the coast of Antarctica, known for its extreme weather conditions, massive ice shelves, and diverse wildlife, including Adelie and emperor penguins.'
                }
            },
            {
                title: 'Sea of Okhotsk'
            }
        ]
    }
]
