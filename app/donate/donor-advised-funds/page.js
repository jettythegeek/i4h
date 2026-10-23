import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GivingDetailPage from "@/components/GivingDetailPage";

export const metadata = {title:"Donor Advised Funds",description:"Give to Christ’s Hands Centre Society through your donor advised fund."};

export default function DonorAdvisedFundsPage(){return <><Header/><GivingDetailPage type="daf"/><Footer/></>}
