import { CategoryType } from '@company-name/util/enums';

import { Category } from '../../../models/src/lib/category.model';
import { Glossary } from '../../../models/src/lib/glossary.model';

export const GlossaryStaticData: Glossary = {
    entries: [
        {
            category: {
                id: '0',
                icon: 'assets/marketing.svg',
                title: CategoryType.Marketing,
                termsLearned: 5,
                termsTotal: 25,
            },
            definition: {
                title: 'Four Ps',
                pronunciation: '',
                description:
                    'When understanding marketing it is crucial to get a grasp of the "Four Ps" early on. The Four Ps are Product, Price, Place, and Promotion and as a collective, they are the essential factors involved in marketing a good or service to the public. The first P is product, when brainstorming ideas for a product or service you need to have an existing demand in mind that needs to be fulfilled. Doing this will allow your product to have a demand immediately after launch into the market and will start generating you revenue. The second P is price, this is what all consumers will be paying when they go to purchase your product in stores. It would be ideal to have an appealing low priced product to attract attention and popularize your product amongst your target market. The third P is place or placement, and where you choose to set up your company geographically will affect how you market to your target audience. The overall goal in marketing no matter where you are located is to get your product in front of the right people. Placement can also mean getting your product advertised on television, being placed on TV and having your product seen by millions of people can be beneficial to the publicity of your product. The fourth and final P is Promotion, which is debatably the most important P. A good product or service with terrible marketing will not go far. As a marketer, you need to look at promotion as giving your customers the "why?" on your product. Let your audience know what makes your service so great.',
                example: '',
            },
        },
        {
            category: {
                id: '1',
                icon: 'assets/business.svg',
                title: CategoryType.Business,
                termsLearned: 7,
                termsTotal: 25,
            },
            definition: {
                title: 'Business to Business (B2B)',
                pronunciation: '',
                description:
                    'The term Business to Business, commonly abbreviated as B2B, is very much what it sounds like, it is a form of transaction between businesses, such as one involving a manufacturer and wholesaler, or a wholesaler and a retailer. Business-to-business transactions usually vary a little from your typical business-to-customer (B2C) transactions given in business-to-business transactions one company is most likely to purchase raw materials that they would then use in the process of actually producing and manufacturing their products. An example of a Business-to-Business transaction in the real business world is Apple and Samsung. Apple has a business-to-business relationship with Samsung-owned companies such as Intel, Panasonic, and more as they help produce many of the parts required for an iPhone build. Another example of a real-world business-to-business transaction is Alibaba, and Amazon Web Services (AWS). Alibaba the e-commerce mecca company is responsible for business transactions that take place worldwide and Amazon Web Services (AWS) the technology mecca company is one of the leading cloud providers with customers such as GE, Hess, Expedia, and more .',
                example: '',
            },
        },
        {
            category: {
                id: '2',
                icon: 'assets/investing.svg',
                title: CategoryType.Investment,
                termsLearned: 0,
                termsTotal: 25,
            },
            definition: {
                title: 'Capital Gain',
                pronunciation: '',
                description:
                    'When getting into investing either profit or loss will probably be the first thing you encounter. But what is capital gain? Capital gain refers to the increase in the value of a capital asset when it is sold. If we boil this down to simpler terms, the capital gain is any positive numerical value made on a stock once it is sold. The way in which one would calculate the capital gain they made off a transaction would be by taking the price for which they sold the item and then subtracting the initial buying price of the item. For example, say someone sold their brand new car for $50,000. But they bought that car for $35,000 the capital gain they would have off the transaction of selling the car would be $15,000. A key thing to keep in mind is that there are two different categories of capital gain: Short-term and Long-term capital gain. The difference between the two is, short-term capital gains are those received on assets that you have sold after holding them for one year or less and long-term capital gains are those received on assets that you have sold after holding them for more than one year. Short-term and long-term capital gains are taxed differently. Remember that capital gains apply to any type of asset.',
                example: '',
            },
        },
        {
            category: {
                id: '3',
                icon: 'assets/finance.svg',
                title: CategoryType.Finance,
                termsLearned: 11,
                termsTotal: 25,
            },
            definition: {
                title: 'Interest Rate',
                pronunciation: '',
                description:
                    'An interest rate is something that is commonly asked for when money is lent out or borrowed. Although what exactly is an interest rate? An interest rate is, the amount a lender charges a borrower and is a percentage of the principal—the amount loaned. The way that an interest rate works are, typically the person will require some form of compensation for lending out their money which is what we call interest. The rate of interest one is charged will usually vary depending on how much money one chooses to borrow. One key thing to keep in mind when looking at interest rates is that there are multiple kinds of interest rates. There is simple interest, compound interest, interest on savings accounts, and more. An example of an interest rate problem is, If you take out a $300,000 mortgage from the bank and the loan agreement stipulates that the interest rate on the loan is 4%, this means that you will have to pay the bank the original loan amount of $300,000 + (4% x $300,000) = $300,000 + $12,000 = $312,000.',
                example: '',
            },
        },
    ],
};

export const Categories: Category[] = [
    {
        id: '0',
        icon: 'assets/finance.svg',
        title: CategoryType.Finance,
        termsLearned: 11,
        termsTotal: 25,
    },
    {
        id: '1',
        icon: 'assets/marketing.svg',
        title: CategoryType.Marketing,
        termsLearned: 5,
        termsTotal: 25,
    },
    {
        id: '2',
        icon: 'assets/business.svg',
        title: CategoryType.Business,
        termsLearned: 7,
        termsTotal: 25,
    },
    {
        id: '3',
        icon: 'assets/investing.svg',
        title: CategoryType.Investment,
        termsLearned: 0,
        termsTotal: 25,
    },
];
