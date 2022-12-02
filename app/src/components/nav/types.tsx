import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export namespace SessionStack {
    export type ParamList = {
        Session: undefined;
        SessionDetail: undefined;
        Calendly: undefined;
        VideoCall: {url: String};
    }
    
    export type NavigatorProps = NativeStackNavigationProp<ParamList>
    
    export type VideoCallRouteProps = RouteProp<
    ParamList,
        'VideoCall'
    >;
}

export namespace AuthStack {
    export type ParamList = {
        Login: undefined;
        CreatePassword: undefined;
        ForgotPassword: undefined;
        ResetPassword: undefined;
        Signup: undefined;
    }

    export type NavigatorProps = NativeStackNavigationProp<ParamList>
}
