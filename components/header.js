import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';
import LabelIcon from '@material-ui/icons/Label';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();
  const sections = [
    { title: '本', url: '/tags/本', icon: MenuBookIcon },
    { title: '競プロ', url: '/tags/競プロ', icon: CodeIcon },
    { title: '日々雑感', url: '/tags/日々雑感', icon: WbIncandescentIcon },
　  { title: 'Tags', url: '/tags', icon: LocalOfferIcon },
    { title: 'About', url: '/about', icon: PersonIcon },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link href="/" color="inherit">
          Aratamotsu's blog
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={`${section.url}`}
              className={classes.toolbarLink}
            >
              <section.icon /> {" "}
              {section.title}
            </Link>
          ))}      
      </Toolbar>
      </React.Fragment>
    </div>
  )
}
