export default [
  { name: 'AppBar', deps: ['Paper'] },
  { name: 'Avatar', deps: [] },
  { name: 'Backdrop', deps: ['Fade'] },
  { name: 'Badge', deps: [] },
  { name: 'BottomNavigation', deps: ['ButtonBase'] },
  // { name: 'BottomNavigationAction', deps: ['ButtonBase'] },
  { name: 'Box', deps: [] },
  { name: 'Breadcrumbs', deps: ['Typography'] },
  { name: 'Button', deps: ['ButtonBase'] },
  { name: 'ButtonBase', deps: ['NoSsr'] },
  { name: 'ButtonGroup', deps: ['Button'] },
  { name: 'Card', deps: ['Paper', 'ButtonBase', 'Typography'] },
  // { name: 'CardActionArea', deps: ['ButtonBase'] },
  // { name: 'CardActions', deps: [] },
  // { name: 'CardContent', deps: [] },
  // { name: 'CardHeader', deps: ['Typography'] },
  // { name: 'CardMedia', deps: [] },
  { name: 'Checkbox', deps: [] },
  { name: 'Chip', deps: ['ButtonBase'] },
  { name: 'CircularProgress', deps: [] },
  // { name: 'ClickAwayListener', deps: [] },
  // { name: 'Collapse', deps: [] },
  { name: 'Container', deps: [] },
  // { name: 'CssBaseline', deps: [] },
  { name: 'Dialog', deps: ['Modal', 'Backdrop', 'Fade', 'Paper', 'Typography'] },
  // { name: 'DialogActions', deps: [] },
  // { name: 'DialogContent', deps: [] },
  // { name: 'DialogContentText', deps: ['Typography'] },
  // { name: 'DialogTitle', deps: ['Typography'] },
  { name: 'Divider', deps: [] },
  { name: 'Drawer', deps: ['Modal', 'Backdrop', 'Slide', 'Paper'] },
  { name: 'ExpansionPanel', deps: ['Collapse', 'Paper', 'ButtonBase', 'IconButton'] },
  // { name: 'ExpansionPanelActions', deps: [] },
  // { name: 'ExpansionPanelDetails', deps: [] },
  // { name: 'ExpansionPanelSummary', deps: ['ButtonBase', 'IconButton', 'ExpansionPanel'] },
  // { name: 'Fab', deps: ['ButtonBase'] },
  // { name: 'Fade', deps: [] },
  // { name: 'FilledInput', deps: ['InputBase'] },
  // { name: 'FormControl', deps: ['InputBase'] },
  // { name: 'FormControlLabel', deps: ['FormControl', 'Typography'] },
  // { name: 'FormGroup', deps: [] },
  // { name: 'FormHelperText', deps: ['FormControl'] },
  // { name: 'FormLabel', deps: ['FormControl'] },
  { name: 'Grid', deps: [] },
  { name: 'GridList', deps: [] },
  // { name: 'GridListTile', deps: [] },
  // { name: 'GridListTileBar', deps: [] },
  // { name: 'Grow', deps: [] },
  { name: 'Hidden', deps: [] },
  { name: 'Icon', deps: [] },
  // { name: 'IconButton', deps: ['ButtonBase'] },
  // { name: 'Input', deps: ['InputBase'] },
  // { name: 'InputAdornment', deps: ['Typography', 'FormControl'] },
  // { name: 'InputBase', deps: ['TextareaAutosize'] },
  // { name: 'InputLabel', deps: ['FormControl', 'FormLabel'] },
  { name: 'LinearProgress', deps: [] },
  { name: 'Link', deps: ['Typography'] },
  { name: 'List', deps: ['ButtonBase', 'Typography'] },
  // { name: 'ListItem', deps: ['ButtonBase', 'List'] },
  // { name: 'ListItemAvatar', deps: ['List'] },
  // { name: 'ListItemIcon', deps: ['List'] },
  // { name: 'ListItemSecondaryAction', deps: [] },
  // { name: 'ListItemText', deps: ['Typography', 'List'] },
  // { name: 'ListSubheader', deps: [] },
  { name: 'Menu', deps: ['Popover', 'MenuList', 'ListItem', 'List'] },
  // { name: 'MenuItem', deps: ['ListItem'] },
  // { name: 'MenuList', deps: ['List'] },
  // { name: 'MobileStepper', deps: ['Paper', 'LinearProgress'] },
  // { name: 'Modal', deps: ['Portal'] },
  // { name: 'NativeSelect', deps: ['FormControl', 'Input'] },
  // { name: 'NoSsr', deps: [] },
  // { name: 'OutlinedInput', deps: ['InputBase'] },
  { name: 'Paper', deps: [] },
  { name: 'Popover', deps: ['Modal', 'Grow', 'Paper'] },
  { name: 'Popper', deps: ['Portal'] },
  // { name: 'Portal', deps: [] },
  { name: 'Radio', deps: ['RadioGroup'] },
  { name: 'RadioGroup', deps: ['FormGroup'] },
  // { name: 'RootRef', deps: [] },
  { name: 'Select', deps: ['FormControl', 'Input', 'NativeSelect', 'FilledInput', 'OutlinedInput', 'Menu'] },
  // { name: 'Slide', deps: [] },
  { name: 'Slider', deps: [] },
  { name: 'Snackbar', deps: ['ClickAwayListener', 'Grow', 'SnackbarContent', 'Paper'] },
  // { name: 'SnackbarContent', deps: ['Paper'] },
  { name: 'Step', deps: ['Paper', 'LinearProgress', 'ButtonBase', 'Collapse', 'Icon', 'Typography'] },
  // { name: 'StepButton', deps: ['ButtonBase', 'StepLabel'] },
  // { name: 'StepConnector', deps: [] },
  // { name: 'StepContent', deps: ['Collapse'] },
  // { name: 'StepIcon', deps: ['Icon'] },
  // { name: 'StepLabel', deps: ['Typography', 'StepIcon'] },
  // { name: 'Stepper', deps: ['Paper', 'StepConnector'] },
  // { name: 'SvgIcon', deps: [] },
  // { name: 'SwipeableDrawer', deps: ['Drawer', 'NoSsr'] },
  { name: 'Switch', deps: [] },
  { name: 'Tab', deps: ['ButtonBase'] },
  {
    name: 'Table',
    deps: ['InputBase', 'ButtonBase', 'MenuItem', 'Select', 'TableCell', 'Toolbar', 'Typography', 'IconButton']
  },
  // { name: 'TableBody', deps: ['Table'] },
  // { name: 'TableCell', deps: ['Table'] },
  // { name: 'TableContainer', deps: [] },
  // { name: 'TableFooter', deps: ['Table'] },
  // { name: 'TableHead', deps: ['Table'] },
  // {
  //   name: 'TablePagination',
  //   deps: ['InputBase', 'MenuItem', 'Select', 'TableCell', 'Toolbar', 'Typography', 'IconButton']
  // },
  // { name: 'TableRow', deps: ['Table'] },
  // { name: 'TableSortLabel', deps: ['ButtonBase'] },
  { name: 'Tabs', deps: ['ButtonBase'] },
  {
    name: 'TextField',
    deps: ['Input', 'FilledInput', 'OutlinedInput', 'InputLabel', 'FormControl', 'FormHelperText', 'Select']
  },
  // { name: 'TextareaAutosize', deps: [] },
  // { name: 'Toolbar', deps: [] },
  { name: 'Tooltip', deps: ['Grow', 'Popper'] },
  { name: 'Typography', deps: [] },
  // { name: 'Zoom', deps: [] }
];