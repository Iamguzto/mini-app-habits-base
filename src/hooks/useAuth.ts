@@ .. @@
   useEffect(() => {
     const initAuth = async () => {
       try {
+        if (!supabase) {
+          console.error('Supabase client not initialized');
+          setLoading(false);
+          return;
+        }
+
         const { data: { session } } = await supabase.auth.getSession();
         setUser(session?.user || null);
         setSession(session);
@@ .. @@
   }, []);

   const signUp = async (email: string, password: string) => {
+    if (!supabase) throw new Error('Supabase not initialized');
     return AuthService.signUp(email, password);
   };

   const signIn = async (email: string, password: string) => {
+    if (!supabase) throw new Error('Supabase not initialized');
     return AuthService.signIn(email, password);
   };

   const signOut = async () => {
+    if (!supabase) throw new Error('Supabase not initialized');
     await AuthService.signOut();
     setUser(null);
     setSession(null);
   };