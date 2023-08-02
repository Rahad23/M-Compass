import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./FAQStyle/FaqStyle.css";
const Faq = () => {
    const accordion=[
        {
            id: 1,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
        {
            id: 2,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
        {
            id: 3,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
        {
            id: 4,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
        {
            id: 5,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
        {
            id: 6,
            questions: "Can You Make a Customized System for My School/college?",
            answer: "Yes, we developed many school software modules and our high professional developers are here to develop any customized system software you need."
        },
    ]

    return (
        <div className="mt-48 mb-16 set-bg-img px-44 py-16">
            <div className="text-center">
                <span className="font-semibold text-[#4054B2]">NEED HELP?</span>
                <h1 className="text-5xl font-semibold">FAQs</h1>
                <div className="h-1 w-14 bg-[#4054B2] mx-auto mt-4"></div>
                <p className="mt-4 text-xl text-[#757575]">You Can Ask Questions About School Management Software Modules</p>
                {
                        <Accordion allowZeroExpanded className="grid grid-cols-2 mt-10 gap-y-3 gap-x-3">
                        {accordion.map((item) => (
                            <AccordionItem key={item.id}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                            {item.questions}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  {item.answer}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                }
            </div>
        </div>
    );
};

export default Faq;