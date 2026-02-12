const profiles= [
    {
        id: 1,
        name: "Mailet",
        avatar: "https://blogger.googleusercontent.com/img/a/AVvXsEiGiN0vhLJ1CAU1BWTEEwAML1yQo44t3Ug_R6pPP5zeOOFIueQAELk43WWbwhqjknNLnE30VDXkzAqExdDSkp9P4imH6DEDuvN5R6bf-SRsQU-zYKXakpvJHLPvh6fS-dfIDXbZ6xdkwku4K6FBND-euG7ZAKBmtsUgqjAOzWpSiJK-CH1YMoQIXXpfCmQ9",
    },
    {
        id: 2,
        name: "Invitado",
        avatar: "https://blogger.googleusercontent.com/img/a/AVvXsEgVXp9xd6Yl-ZCf1Bb9Jcjq2KSLtrq8BKkm3KLrg_aQh_UKvpWN1xgCIXJwhp2rlHrAvVp0ERtLNVn_EdwdoFpXzmr4m6462iqnONLbR7J5tEBx-IVVFIBcFl09hEPm7YUJQbCzWI9WBbbMpEIPiAFIUAD4QtBkxMfA-YwjrmI_dplJ9FdVX-ExlQ4sB4GT"
    },
    {
        id: 3,
        name: "Invitado",
        avatar: "https://blogger.googleusercontent.com/img/a/AVvXsEgVXp9xd6Yl-ZCf1Bb9Jcjq2KSLtrq8BKkm3KLrg_aQh_UKvpWN1xgCIXJwhp2rlHrAvVp0ERtLNVn_EdwdoFpXzmr4m6462iqnONLbR7J5tEBx-IVVFIBcFl09hEPm7YUJQbCzWI9WBbbMpEIPiAFIUAD4QtBkxMfA-YwjrmI_dplJ9FdVX-ExlQ4sB4GT"
    },
    {
        id: 4,
        name: "Mailet",
        avatar: "https://blogger.googleusercontent.com/img/a/AVvXsEiGiN0vhLJ1CAU1BWTEEwAML1yQo44t3Ug_R6pPP5zeOOFIueQAELk43WWbwhqjknNLnE30VDXkzAqExdDSkp9P4imH6DEDuvN5R6bf-SRsQU-zYKXakpvJHLPvh6fS-dfIDXbZ6xdkwku4K6FBND-euG7ZAKBmtsUgqjAOzWpSiJK-CH1YMoQIXXpfCmQ9",
    },
]

function ProfileSelection(){
    return(
         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b ">
      
      <h1 className="text-title">
        Bienvenido a la Bilbioteca
      </h1>
      <h1 className="text-des">
        ¿Quién está leyendo?
      </h1>
      

      <div className="flex gap-10">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-300">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <p className="mt-4 text-lg text-gray-400 group-hover:text-white transition">
              {profile.name}
            </p>
          </div>
        ))}
      </div>

    </div>
    )
}

export default ProfileSelection
