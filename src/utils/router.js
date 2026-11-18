import { Platform } from 'react-native';
import * as NativeRouter from 'react-router-native';
import * as WebRouter from 'react-router-dom';

const Router = Platform.OS === 'web' ? WebRouter : NativeRouter;

export const useHistory = Router.useHistory;
export const useParams = Router.useParams;
export const Link = Router.Link;
export const Route = Router.Route;
export const Switch = Router.Switch;
export const Redirect = Router.Redirect;