import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
root: {
},
menuButton: {
marginLeft: 'auto'
},
};

class AppShell extends React.Component {
constructor(props) {
super(props);
this.state = {
toggle: false

};
}
handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
handleDrawerToggle2 = () => this.setState({toggle: !this.state.AboutPage3})

render() {
const { classes } = this.props;
return (
<div className={classes.root}>
<AppBar position="static">
<IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
<MenuIcon/>
</IconButton>
</AppBar>
<Drawer open={this.state.toggle}>
<MenuItem onClick={this.handleDrawerToggle}>언어설정</MenuItem>
<MenuItem onClick={this.handleDrawerToggle2}>회원정보 수정</MenuItem>
<MenuItem onClick={this.handleDrawerToggle}>로그아웃</MenuItem>
<MenuItem onClick={this.handleDrawerToggle}>앱 공유하기</MenuItem>
<MenuItem onClick={this.handleDrawerToggle}>회원탈퇴</MenuItem>
</Drawer>
</div>
);
}
}

export default withStyles(styles)(AppShell);
