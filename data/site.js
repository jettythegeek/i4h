export const programs=[
{slug:"fashion-tailoring",title:"Fashion Design and Tailoring Department",image:"/images/chs/programs/program-7.jpg",since:"April 2024",text:"Equips individuals with skills in fashion design and pattern making since April 2024."},
{slug:"metal-fabrication",title:"Metal Fabrication Department",image:"/images/chs/programs/program-5.jpg",since:"April 2024",text:"Equips individuals with hands-on metalworking skills, fostering innovation, entrepreneurship, and self-sufficiency since April 2024."},
{slug:"computer-training",title:"Computer Training Department",image:"/images/chs/programs/program-8.jpg",since:"April 2024",text:"Equips individuals with essential computer skills, enhancing employability and digital literacy since April 2024."},
{slug:"liquid-soap",title:"Liquid Soap Making Department",image:"/images/chs/programs/program-10.jpg",since:"April 2024",text:"Equips individuals with hands-on skills to craft high-quality soap products, guided by expert trainers since April 2024."},
{slug:"bar-soap",title:"Bar Soap Making Department",image:"/images/chs/programs/program-2.jpg",since:"April 2024",text:"Equips individuals with hands-on skills to craft high-quality bar soaps, guided by expert trainers."},
{slug:"bakery",title:"Bakery and Confectionery Department",image:"/images/chs/programs/program-1.jpg",since:"May 2024",text:"Equips individuals with hands-on skills in baking, guided by expert instructors since May 2024."},
{slug:"notebook-making",title:"Note Book Making Department",image:"/images/chs/programs/program-3.jpg",since:"April 2024",text:"Equips individuals with skills in bookbinding, book repair, and book design."},
{slug:"hair-salon",title:"Hair and Salon Department",image:"/images/chs/programs/program-4.jpg",since:"April 2024",text:"Provides comprehensive training in hairstyling, grooming, and beauty services, equipping students for success in the beauty industry."},
{slug:"childcare-education",title:"Our Child Care and Education Department",image:"/images/chs/programs/program-6.jpg",since:"August 2024",text:"Trains children in happiness and positivity regardless of circumstances."}
];

export const posts=[
{slug:"2024-training-year-highlights",title:"2024 training year highlights",date:"February 10, 2025",image:"/images/chs/blog/blog-1.jpg",excerpt:"We’re thrilled to share our 2024 training year highlights!",body:["Training by the Numbers","851 individuals trained across 8 departments","782 graduates successfully completed their training programs","69 individuals require additional training to meet our graduation standards","Departmental Breakdown","Fashion and Design: 113 trainees, 109 graduates","Metal Fabrication: 98 trainees, 91 graduates","Liquid Soap Making: 104 trainees, 98 graduates","Bar Soap Making: 106 trainees, 100 graduates","Notebook Making: 94 trainees, 86 graduates","Hair and Salon: 142 trainees, 111 graduates","Bakery: 112 trainees, 107 graduates","Computer Training: 82 trainees, 80 graduates","At Christ’s Hands Skills Training, we’re committed to equipping individuals with practical skills to enhance their livelihoods. Our 2024 training year has been a resounding success, and we look forward to continuing this impactful work in the years to come."]},
{slug:"tailoring-class-graduates",title:"Tailoring class graduates 10 women",date:"September 9, 2024",image:"/images/chs/blog/blog-2.jpg",excerpt:"Tailoring class graduates 10 women",body:["After several months of instruction, the instructor judged on September 9, 2024, that ten of the women in the class had done well enough in the shirt-making portion of the curriculum to be totally graduated and ready to move on to another item."]},
{slug:"youth-baking-workshop",title:"Youths baking workshop a success",date:"June 17, 2024",image:"/images/chs/blog/blog-3.jpg",excerpt:"Youths baking workshop a success",body:["Christ’s Hands Skills Training and Child Development Centre had its inaugural baking session on June 17, 2024. Many young people, primarily dropouts from school, attended. The young people realized at the end of the program that having practical skills is the finest thing one can have in life. They are grateful to all the instructors and pioneers of Christ’s hands."]}
];

export const searchItems=[
["Page","Home","/","The Poverty, Skills, Care, and Mental Health Crisis Facing Vulnerable Families in Uganda"],
["Page","About us","/about","Mission Vision, & Values, Goals, History, Theory of Change, and Our Team"],
["Page","What we do","/what-we-do","Where we work, Who we serve, and What we prioritize"],
["Page","Programs","/programs","TVET-WRAP Whole-Family Resilience & Advancement Program"],
["Page","Impact","/impact","Impact to date and Canadian Registered Charity"],
["Page","Partner with us","/partner","Public · Private · Strategic partners"],
["Page","Donate","/donate","Help provide skills training for vulnerable families in Uganda"],
["Page","Donor Advised Funds","/donate/donor-advised-funds","Recommend a grant through your DAF to support Christ’s Hands Centre Society"],
["Page","Legacy Giving","/donate/legacy-giving","Leave a gift in your will to empower women and youth"],
...programs.map(p=>["Program",p.title,`/programs/${p.slug}`,p.text]),...posts.map(p=>["Post",p.title,`/blog/${p.slug}`,p.excerpt])];
