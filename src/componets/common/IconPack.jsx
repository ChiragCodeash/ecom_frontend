import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import StarIcon from '@mui/icons-material/Star';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import FilterListIcon from '@mui/icons-material/FilterList';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';



const IconPack = ({ icon, size , sx }) => {
  switch (icon) {
    case "youtube":
      return (
        <>
          <YouTubeIcon fontSize={size || "medium"}/>
        </>
      );
    case "instagram":
      return (
        <>
          <InstagramIcon fontSize={size || "medium"} />
        </>
      );
    case "facebook":
      return (
        <>
          <FacebookTwoToneIcon fontSize={size || "medium"} />
        </>
      );
    case "twitter":
      return (
        <>
          <TwitterIcon fontSize={size || "medium"} />
        </>
      );
    case "pinterest":
      return (
        <>
          <PinterestIcon fontSize={size || "medium"} />
        </>
      );
    case "search":
      return (
        <>
          <SearchIcon fontSize={size || "medium"} />
        </>
      );
    case "cart":
      return (
        <>
          <LocalMallOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "close":
      return (
        <>
          <CloseOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "heart":
      return (
        <>
          <FavoriteBorderOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "user":
      return (
        <>
          <PersonOutlineOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "nav":
      return (
        <>
          <ClearAllOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "shipping":
      return (
        <>
          <LocalShippingOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "rightarrow":
      return (
        <>
          <KeyboardArrowRightIcon fontSize={size || "medium"} />
        </>
      );
    case "leftarrow":
      return (
        <>
          <ChevronLeftIcon fontSize={size || "medium"} />
        </>
      );
    case "downarrow":
      return (
        <>
          <KeyboardArrowDownIcon fontSize={size || "medium"} />
        </>
      );
    case "toparrow":
      return (
        <>
          <KeyboardArrowUpIcon fontSize={size || "medium"} />
        </>
      );
    case "star":
      return (
        <>
          <StarIcon fontSize={size || "medium"} sx={sx}/>
        </>
      );
    case "zoom":
      return (
        <>
          <ZoomOutMapIcon fontSize={size || "medium"} />
        </>
      );
    case "filter":
      return (
        <>
          <FilterListIcon fontSize={size || "medium"} />
        </>
      );
    case "eye":
      return (
        <>
          <RemoveRedEyeOutlinedIcon fontSize={size || "medium"} />
        </>
      );
    case "fillheart":
      return (
        <>
          <FavoriteIcon fontSize={size || "medium"} />
        </>
      );
    case "starborder":
      return (
        <>
          <StarBorderIcon fontSize={size || "medium"} />
        </>
      );

    default:
      break;
  }
};

export default IconPack;
