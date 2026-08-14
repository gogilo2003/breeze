import AddressIcon from './Address';
import ArrowBackIcon from './ArrowBack';
import ArrowForwardIcon from './ArrowForward';
import ChevronDownIcon from './ChevronDown';
import ChevronUpIcon from './ChevronUp';
import CloseIcon from './Close';
import CloudDownloadIcon from './CloudDownload';
import CopyIcon from './Copy';
import CurvedArrowLeftIcon from './CurvedArrowLeft';
import CurvedArrowLeftDoubleIcon from './CurvedArrowLeftDouble';
import CurvedArrowRightIcon from './CurvedArrowRight';
import CurvedArrowRightDoubleIcon from './CurvedArrowRightDouble';
import DashboardIcon from './Dashboard';
import DocIcon from './Doc';
import DocxIcon from './Docx';
import DownloadIcon from './Download';
import DownloadsIcon from './Downloads';
import ElementsIcon from './Elements';
import EllipsisHorizontalIcon from './EllipsisHorizontal';
import EmailIcon from './Email';
import FacebookIcon from './Facebook';
import GoalsIcon from './Goals';
import IconIcon from './Icon';
import ImageIcon from './Image';
import InstagramIcon from './Instagram';
import LinkedinIcon from './Linkedin';
import LocationIcon from './Location';
import MenuIcon from './Menu';
import NewsIcon from './News';
import PdfIcon from './Pdf';
import PeopleIcon from './People';
import PhoneIcon from './Phone';
import PptIcon from './Ppt';
import ProjectsIcon from './Projects';
import SdgIconIcon from './SdgIcon';
import SectionsIcon from './Sections';
import TwitterIcon from './Twitter';
import XlsIcon from './Xls';
import XlsxIcon from './Xlsx';
import YoutubeIcon from './Youtube';
import ZipIcon from './Zip';

const icons = {
    'Address': AddressIcon,
    'ArrowBack': ArrowBackIcon,
    'ArrowForward': ArrowForwardIcon,
    'ChevronDown': ChevronDownIcon,
    'ChevronUp': ChevronUpIcon,
    'Close': CloseIcon,
    'CloudDownload': CloudDownloadIcon,
    'Copy': CopyIcon,
    'CurvedArrowLeft': CurvedArrowLeftIcon,
    'CurvedArrowLeftDouble': CurvedArrowLeftDoubleIcon,
    'CurvedArrowRight': CurvedArrowRightIcon,
    'CurvedArrowRightDouble': CurvedArrowRightDoubleIcon,
    'Dashboard': DashboardIcon,
    'Doc': DocIcon,
    'Docx': DocxIcon,
    'Download': DownloadIcon,
    'Downloads': DownloadsIcon,
    'Elements': ElementsIcon,
    'EllipsisHorizontal': EllipsisHorizontalIcon,
    'Email': EmailIcon,
    'Facebook': FacebookIcon,
    'Goals': GoalsIcon,
    'Icon': IconIcon,
    'Image': ImageIcon,
    'Instagram': InstagramIcon,
    'Linkedin': LinkedinIcon,
    'Location': LocationIcon,
    'Menu': MenuIcon,
    'News': NewsIcon,
    'Pdf': PdfIcon,
    'People': PeopleIcon,
    'Phone': PhoneIcon,
    'Ppt': PptIcon,
    'Projects': ProjectsIcon,
    'SdgIcon': SdgIconIcon,
    'Sections': SectionsIcon,
    'Twitter': TwitterIcon,
    'Xls': XlsIcon,
    'Xlsx': XlsxIcon,
    'Youtube': YoutubeIcon,
    'Zip': ZipIcon,
};

export default function Icon({ type, ...props }) {
    const IconComponent = icons[type];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent {...props} />;
}
